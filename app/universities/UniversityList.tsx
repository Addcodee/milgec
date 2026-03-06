"use client";

import { useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type University = {
  name: string;
  nameRu: string;
  city: string;
  province: string;
  logo?: string;
  rank?: string;
  programs: string[];
  scholarships: string[];
};

const universities: University[] = [
  // === Top-tier / 985 / Double First-Class ===
  { name: "Harbin Institute of Technology", nameRu: "Харбинский политехнический институт", city: "Harbin", province: "Heilongjiang", logo: "/universities/hit.gif", rank: "Top 100", programs: ["Engineering", "CS", "Materials"], scholarships: ["CSC", "HIT Scholarship"] },
  { name: "Huazhong University of Science and Technology", nameRu: "Хуачжунский университет науки и технологий", city: "Wuhan", province: "Hubei", logo: "/universities/hust.png", rank: "Top 100", programs: ["CS", "Medicine", "Engineering"], scholarships: ["CSC", "HUST Scholarship"] },
  { name: "Xi'an Jiaotong University", nameRu: "Сианьский транспортный университет", city: "Xi'an", province: "Shaanxi", logo: "/universities/xjtu.png", rank: "Top 100", programs: ["Engineering", "Business", "Medicine"], scholarships: ["CSC", "XJTU Scholarship"] },
  { name: "South China University of Technology", nameRu: "Южно-Китайский технологический университет", city: "Guangzhou", province: "Guangdong", logo: "/universities/scut.png", rank: "Top 200", programs: ["Engineering", "Architecture", "CS"], scholarships: ["CSC", "SCUT Scholarship"] },
  { name: "China University of Petroleum", nameRu: "Китайский нефтяной университет", city: "Qingdao", province: "Shandong", logo: "/universities/cup.svg", rank: "Top 300", programs: ["Petroleum", "Engineering", "Chemistry"], scholarships: ["CSC", "CUP Scholarship"] },

  // === 211 / Strong Universities ===
  { name: "Zhengzhou University", nameRu: "Чжэнчжоуский университет", city: "Zhengzhou", province: "Henan", logo: "/universities/zzu.png", rank: "211", programs: ["Medicine", "Engineering", "Law"], scholarships: ["CSC", "Henan Provincial"] },
  { name: "Central China Normal University", nameRu: "Центрально-Китайский педагогический университет", city: "Wuhan", province: "Hubei", logo: "/universities/ccnu.svg", rank: "211", programs: ["Education", "Psychology", "Literature"], scholarships: ["CSC", "CCNU Scholarship"] },
  { name: "Dalian Maritime University", nameRu: "Даляньский морской университет", city: "Dalian", province: "Liaoning", logo: "/universities/dmu.png", rank: "211", programs: ["Maritime", "Engineering", "Law"], scholarships: ["CSC", "DMU Scholarship"] },
  { name: "Beijing Foreign Studies University", nameRu: "Пекинский университет иностранных языков", city: "Beijing", province: "Beijing", logo: "/universities/bfsu.png", rank: "211", programs: ["Languages", "International Relations", "Law"], scholarships: ["CSC", "BFSU Scholarship"] },

  // === Other partner universities ===
  { name: "Shandong Normal University", nameRu: "Шаньдунский педагогический университет", city: "Jinan", province: "Shandong", logo: "/universities/sdnu.jpg", programs: ["Education", "Science", "Arts"], scholarships: ["Provincial", "University"] },
  { name: "Tiangong University", nameRu: "Тяньгунский университет", city: "Tianjin", province: "Tianjin", logo: "/universities/tgu.svg", programs: ["Textile", "Engineering", "Design"], scholarships: ["Tianjin Municipal", "University"] },
  { name: "Hebei University of Science and Technology", nameRu: "Хэбэйский университет науки и технологий", city: "Shijiazhuang", province: "Hebei", logo: "/universities/hebust.png", programs: ["Engineering", "Science", "Pharmacy"], scholarships: ["Provincial", "University"] },
  { name: "Ningbo University of Finance and Economics", nameRu: "Нинбоский университет финансов и экономики", city: "Ningbo", province: "Zhejiang", logo: "/universities/nbufe.png", programs: ["Economics", "Finance", "Business"], scholarships: ["Zhejiang Provincial", "University"] },
  { name: "Nanjing Polytechnic Institute", nameRu: "Нанкинский политехнический институт", city: "Nanjing", province: "Jiangsu", logo: "/universities/njpi.png", programs: ["Engineering", "IT", "Automation"], scholarships: ["University"] },
  { name: "Southwest University of Political Science and Law", nameRu: "Юго-Западный университет политики и права", city: "Chongqing", province: "Chongqing", logo: "/universities/swupl.png", programs: ["Law", "Political Science", "Economics"], scholarships: ["CSC", "University"] },
  { name: "Beijing Institute of Graphic Communication", nameRu: "Пекинский институт печатного дела", city: "Beijing", province: "Beijing", logo: "/universities/bigc.png", programs: ["Design", "Media", "Publishing"], scholarships: ["University"] },

  // === Universities without local logos ===
  { name: "Shandong University", nameRu: "Шаньдунский университет", city: "Jinan", province: "Shandong", rank: "Top 200", programs: ["Medicine", "Engineering", "Literature"], scholarships: ["CSC", "SDU Scholarship"] },
  { name: "Zhejiang University of Technology", nameRu: "Чжэцзянский технологический университет", city: "Hangzhou", province: "Zhejiang", programs: ["Engineering", "Business", "CS"], scholarships: ["Zhejiang Provincial", "University"] },
  { name: "Shanghai University", nameRu: "Шанхайский университет", city: "Shanghai", province: "Shanghai", rank: "211", programs: ["Engineering", "Film", "Business"], scholarships: ["CSC", "Shanghai Municipal"] },
  { name: "Wuhan University of Technology", nameRu: "Уханьский технологический университет", city: "Wuhan", province: "Hubei", rank: "211", programs: ["Engineering", "Materials", "Architecture"], scholarships: ["CSC", "WUT Scholarship"] },
  { name: "Nanjing University of Aeronautics and Astronautics", nameRu: "Нанкинский аэрокосмический университет", city: "Nanjing", province: "Jiangsu", rank: "211", programs: ["Aerospace", "Engineering", "CS"], scholarships: ["CSC", "NUAA Scholarship"] },
  { name: "Jilin University", nameRu: "Цзилиньский университет", city: "Changchun", province: "Jilin", rank: "Top 200", programs: ["Medicine", "Engineering", "Law"], scholarships: ["CSC", "JLU Scholarship"] },
  { name: "Chongqing University", nameRu: "Чунцинский университет", city: "Chongqing", province: "Chongqing", rank: "Top 300", programs: ["Engineering", "Architecture", "Business"], scholarships: ["CSC", "CQU Scholarship"] },
  { name: "Northeast Normal University", nameRu: "Северо-Восточный педагогический университет", city: "Changchun", province: "Jilin", rank: "211", programs: ["Education", "Biology", "Geography"], scholarships: ["CSC", "NENU Scholarship"] },
  { name: "Kunming University of Science and Technology", nameRu: "Куньминский университет науки и технологий", city: "Kunming", province: "Yunnan", programs: ["Engineering", "Mining", "Environmental"], scholarships: ["Yunnan Provincial", "University"] },
  { name: "Guangxi University", nameRu: "Гуансийский университет", city: "Nanning", province: "Guangxi", rank: "211", programs: ["Agriculture", "Engineering", "Business"], scholarships: ["CSC", "Guangxi Provincial"] },
  { name: "Nanchang University", nameRu: "Наньчанский университет", city: "Nanchang", province: "Jiangxi", rank: "211", programs: ["Medicine", "Engineering", "Science"], scholarships: ["CSC", "University"] },
  { name: "China Three Gorges University", nameRu: "Университет Трёх ущелий", city: "Yichang", province: "Hubei", programs: ["Hydroelectric", "Engineering", "Medicine"], scholarships: ["Provincial", "University"] },
  { name: "Lanzhou University", nameRu: "Ланьчжоуский университет", city: "Lanzhou", province: "Gansu", rank: "Top 300", programs: ["Chemistry", "Ecology", "Nuclear"], scholarships: ["CSC", "LZU Scholarship"] },
  { name: "Ocean University of China", nameRu: "Океанический университет Китая", city: "Qingdao", province: "Shandong", rank: "Top 300", programs: ["Marine Science", "Fisheries", "Engineering"], scholarships: ["CSC", "OUC Scholarship"] },
  { name: "Jiangsu University", nameRu: "Цзянсуский университет", city: "Zhenjiang", province: "Jiangsu", programs: ["Engineering", "Medicine", "Agriculture"], scholarships: ["Jiangsu Provincial", "University"] },
  { name: "Qingdao University", nameRu: "Циндаоский университет", city: "Qingdao", province: "Shandong", programs: ["Medicine", "Engineering", "Business"], scholarships: ["Shandong Provincial", "University"] },
  { name: "Changsha University of Science and Technology", nameRu: "Чанша университет науки и технологий", city: "Changsha", province: "Hunan", programs: ["Civil Engineering", "Transportation", "IT"], scholarships: ["Hunan Provincial", "University"] },
  { name: "Shenyang Aerospace University", nameRu: "Шэньянский аэрокосмический университет", city: "Shenyang", province: "Liaoning", programs: ["Aerospace", "Engineering", "Economics"], scholarships: ["Provincial", "University"] },
  { name: "Wuhan Textile University", nameRu: "Уханьский текстильный университет", city: "Wuhan", province: "Hubei", programs: ["Textile", "Design", "Engineering"], scholarships: ["Provincial", "University"] },
  { name: "Anhui University of Technology", nameRu: "Аньхойский технологический университет", city: "Maanshan", province: "Anhui", programs: ["Metallurgy", "Engineering", "CS"], scholarships: ["Provincial", "University"] },
  { name: "Xinjiang University", nameRu: "Синьцзянский университет", city: "Urumqi", province: "Xinjiang", rank: "211", programs: ["Engineering", "Science", "Languages"], scholarships: ["CSC", "Xinjiang Provincial"] },
  { name: "Guizhou University", nameRu: "Гуйчжоуский университет", city: "Guiyang", province: "Guizhou", rank: "211", programs: ["Agriculture", "Engineering", "Ecology"], scholarships: ["CSC", "Guizhou Provincial"] },
  { name: "Yanshan University", nameRu: "Яньшаньский университет", city: "Qinhuangdao", province: "Hebei", programs: ["Mechanical", "Engineering", "IT"], scholarships: ["Provincial", "University"] },
  { name: "Nanjing University of Information Science and Technology", nameRu: "Нанкинский университет информационных наук и технологий", city: "Nanjing", province: "Jiangsu", programs: ["Meteorology", "CS", "Environmental"], scholarships: ["CSC", "Jiangsu Provincial"] },
];

const allProvinces = [...new Set(universities.map((u) => u.province))].sort();
const allPrograms = [...new Set(universities.flatMap((u) => u.programs))].sort();

export default function UniversityList() {
  const ref = useRef<HTMLElement>(null);
  const [search, setSearch] = useState("");
  const [filterProvince, setFilterProvince] = useState("");
  const [filterProgram, setFilterProgram] = useState("");
  const [filterScholarship, setFilterScholarship] = useState("");

  useGSAP(() => {
    if (!ref.current) return;

    const header = ref.current.querySelector("[data-ulist-header]");
    if (header) {
      gsap.set(header, { y: 40, opacity: 0 });
      gsap.to(header, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }
  }, { scope: ref });

  const filtered = useMemo(() => {
    return universities.filter((u) => {
      const q = search.toLowerCase();
      const matchSearch = !q || u.name.toLowerCase().includes(q) || u.nameRu.toLowerCase().includes(q) || u.city.toLowerCase().includes(q);
      const matchProvince = !filterProvince || u.province === filterProvince;
      const matchProgram = !filterProgram || u.programs.includes(filterProgram);
      const matchScholarship = !filterScholarship || u.scholarships.some((s) => s.toLowerCase().includes(filterScholarship.toLowerCase()));
      return matchSearch && matchProvince && matchProgram && matchScholarship;
    });
  }, [search, filterProvince, filterProgram, filterScholarship]);

  return (
    <section ref={ref} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-300 mx-auto px-6">
        <div data-ulist-header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-navy tracking-[-0.02em]">
                Список университетов
              </h2>
              <p className="text-text-muted text-sm mt-1">{universities.length} вузов в базе · авторизационные письма от каждого</p>
            </div>
            <p className="text-text-muted text-xs max-w-xs md:text-right">
              Это часть наших партнёров. Полный список из 200+ университетов доступен по запросу.
            </p>
          </div>

          {/* Filters */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск по названию или городу..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-bg-alt border border-border/50 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <select
              value={filterProvince}
              onChange={(e) => setFilterProvince(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-bg-alt border border-border/50 text-sm text-text focus:outline-none focus:border-gold transition-colors appearance-none"
            >
              <option value="">Все провинции</option>
              {allProvinces.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <select
              value={filterProgram}
              onChange={(e) => setFilterProgram(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-bg-alt border border-border/50 text-sm text-text focus:outline-none focus:border-gold transition-colors appearance-none"
            >
              <option value="">Все программы</option>
              {allPrograms.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <select
              value={filterScholarship}
              onChange={(e) => setFilterScholarship(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-bg-alt border border-border/50 text-sm text-text focus:outline-none focus:border-gold transition-colors appearance-none"
            >
              <option value="">Все стипендии</option>
              <option value="CSC">CSC (Правительственная)</option>
              <option value="Provincial">Провинциальная</option>
              <option value="University">Университетская</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-text-muted text-xs mb-4">
          Найдено: {filtered.length} {filtered.length === 1 ? "университет" : filtered.length < 5 ? "университета" : "университетов"}
        </p>

        {/* University cards */}
        <div className="grid gap-3">
          {filtered.map((u) => (
            <div
              key={u.name}
              className="group bg-bg-alt rounded-2xl p-5 border border-border/50 hover:border-gold/30 hover:shadow-sm transition-all flex flex-col md:flex-row md:items-center gap-4"
            >
              {/* Logo */}
              <div className="w-14 h-14 rounded-xl bg-white border border-border/50 flex items-center justify-center shrink-0 overflow-hidden">
                {u.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={u.logo} alt={u.name} className="w-10 h-10 object-contain" />
                ) : (
                  <span className="text-navy/20 text-lg font-bold">{u.name.charAt(0)}</span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-navy font-bold text-sm">{u.name}</h3>
                  {u.rank && (
                    <span className="text-[10px] font-bold text-gold bg-gold/10 px-2 py-0.5 rounded-full">{u.rank}</span>
                  )}
                </div>
                <p className="text-text-muted text-xs">{u.nameRu}</p>
                <p className="text-text-muted text-xs mt-0.5">{u.city}, {u.province}</p>
              </div>

              {/* Programs */}
              <div className="flex flex-wrap gap-1.5 md:max-w-[200px]">
                {u.programs.map((p) => (
                  <span key={p} className="text-[10px] text-text-secondary bg-white border border-border/50 px-2 py-0.5 rounded-full">{p}</span>
                ))}
              </div>

              {/* Scholarships */}
              <div className="flex flex-wrap gap-1.5 md:max-w-[180px]">
                {u.scholarships.map((s) => (
                  <span key={s} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    s.includes("CSC") ? "text-gold bg-gold/10" : "text-text-muted bg-bg-alt border border-border/50"
                  }`}>{s}</span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/8613792888176?text=${encodeURIComponent(`Здравствуйте! Интересует поступление в ${u.name}. Можете помочь?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 text-whatsapp text-xs font-semibold hover:text-whatsapp/80 transition-colors md:opacity-0 md:group-hover:opacity-100"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Узнать больше
              </a>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted text-sm">Ничего не найдено. Попробуйте изменить фильтры.</p>
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-text-muted text-sm mb-4">
            Не нашли нужный университет? У нас 200+ партнёров — свяжитесь для полного списка.
          </p>
          <div className="flex items-center justify-center gap-2.5">
            <a href="/#form" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-all">
              Бесплатная оценка
            </a>
            <a
              href="https://wa.me/8613792888176?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA%20%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%BE%D0%B2."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-center text-whatsapp hover:bg-whatsapp/20 transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
