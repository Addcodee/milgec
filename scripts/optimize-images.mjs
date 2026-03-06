import sharp from "sharp";
import { readdir, stat, writeFile } from "fs/promises";
import path from "path";

const DIRS = ["public/events", "public/authorization", "public/students"];
const MAX_WIDTH = 1200;
const QUALITY = 78;
const PLACEHOLDER_WIDTH = 20;

async function getFiles(dir) {
  try {
    const entries = await readdir(dir);
    return entries
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .map((f) => path.join(dir, f));
  } catch {
    return [];
  }
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  const outPath = path.join(dir, baseName + ".webp");

  // Skip if already a small webp
  if (ext === ".webp") {
    const s = await stat(filePath);
    if (s.size < 200_000) return { skipped: true, file: filePath };
  }

  const info = await sharp(filePath).metadata();
  const needsResize = (info.width || 0) > MAX_WIDTH;

  let pipeline = sharp(filePath);
  if (needsResize) {
    pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  }

  await pipeline.webp({ quality: QUALITY }).toFile(outPath);

  const original = await stat(filePath);
  const optimized = await stat(outPath);
  const saved = ((1 - optimized.size / original.size) * 100).toFixed(0);

  // Remove original if different extension
  if (ext !== ".webp") {
    const { unlink } = await import("fs/promises");
    await unlink(filePath);
  }

  return { file: outPath, originalSize: original.size, newSize: optimized.size, saved };
}

async function generateBlurPlaceholder(filePath) {
  const buffer = await sharp(filePath)
    .resize(PLACEHOLDER_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: 20 })
    .toBuffer();
  return `data:image/webp;base64,${buffer.toString("base64")}`;
}

async function main() {
  const placeholders = {};
  let totalSaved = 0;

  for (const dir of DIRS) {
    const files = await getFiles(dir);
    console.log(`\n📁 ${dir}: ${files.length} images`);

    for (const file of files) {
      try {
        const result = await optimizeImage(file);
        if (result.skipped) {
          console.log(`  ⏭ ${path.basename(file)} (already optimized)`);
        } else {
          const savedKB = ((result.originalSize - result.newSize) / 1024).toFixed(0);
          totalSaved += result.originalSize - result.newSize;
          console.log(`  ✅ ${path.basename(result.file)} — saved ${savedKB}KB (${result.saved}%)`);
        }

        // Generate blur placeholder
        const webpPath = file.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp");
        const key = "/" + path.relative("public", webpPath);
        placeholders[key] = await generateBlurPlaceholder(
          result.skipped ? file : webpPath
        );
      } catch (e) {
        console.error(`  ❌ ${path.basename(file)}: ${e.message}`);
      }
    }
  }

  // Write placeholders map
  const output = `// Auto-generated blur placeholders
const blurPlaceholders: Record<string, string> = ${JSON.stringify(placeholders, null, 2)};

export default blurPlaceholders;
`;
  await writeFile("app/lib/blur-placeholders.ts", output);

  console.log(`\n🎉 Done! Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)}MB`);
  console.log(`📄 Blur placeholders written to app/lib/blur-placeholders.ts`);
}

main();
