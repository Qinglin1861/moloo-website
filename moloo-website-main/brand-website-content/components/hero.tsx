"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface HeroProps {
  onVisible: () => void;
}

export function Hero({ onVisible }: HeroProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 md:pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mountain.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-8 px-6">
        {/* Small decorative element */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">We Are</span>
        </div>

        {/* Main title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-[0.3em] font-light">
          此后
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-4 text-[10px] tracking-[0.2em] uppercase opacity-70">
          <span>沉默</span>
          <span className="w-1 h-1 bg-white/50 rounded-full" />
          <span>时间</span>
          <span className="w-1 h-1 bg-white/50 rounded-full" />
          <span>存在</span>
        </div>

        {/* Decorative lines */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <div className="w-16 h-[1px] bg-white/30" />
          <span className="text-[10px] tracking-[0.2em] opacity-50">THEREAFTER</span>
          <div className="w-16 h-[1px] bg-white/30" />
        </div>

        {/* Year */}
        <p className="text-[10px] tracking-[0.3em] opacity-50 pt-4">2026</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-8 bg-white/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
