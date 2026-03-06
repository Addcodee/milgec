"use client";

import { useState } from "react";
import blurPlaceholders from "../lib/blur-placeholders";

interface Props {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function BlurImage({ src, alt, className = "", fallback }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const placeholder = blurPlaceholders[src];

  if (error && fallback) return <>{fallback}</>;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      {placeholder && !loaded && (
        <img
          src={placeholder}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
        />
      )}
      {/* Actual image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
