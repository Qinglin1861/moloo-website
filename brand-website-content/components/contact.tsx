"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ContactProps {
  onVisible: () => void;
}

const categories = ["全部", "景德镇", "云南", "英国", "沉默"];

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=400&h=400&fit=crop&q=80",
    category: "景德镇",
    title: "瓷土"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop&q=80",
    category: "云南",
    title: "山峦"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400&h=400&fit=crop&q=80",
    category: "英国",
    title: "古堡"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&h=400&fit=crop&q=80",
    category: "沉默",
    title: "静物"
  },
];

export function Contact({ onVisible }: ContactProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 bg-muted/30"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
            时间节点
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-[1px] bg-border" />
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="w-8 h-[1px] bg-border" />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {categories.map((cat, index) => (
            <button
              key={cat}
              type="button"
              className={`px-4 py-2 text-xs tracking-[0.1em] uppercase transition-colors ${
                index === 0
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground border border-border hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid with images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group aspect-square relative overflow-hidden border border-border"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-serif text-lg">{item.title}</span>
                <span className="text-white/70 text-xs tracking-wider mt-1">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="pt-16 md:pt-24 border-t border-border">
          <div className="max-w-md mx-auto text-center space-y-8">
            <h3 className="font-serif text-lg tracking-wide">联系我们</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-3">
                <span className="text-foreground">联系人</span>
                <span className="text-muted-foreground/50">|</span>
                <span>Celine</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-foreground">微信</span>
                <span className="text-muted-foreground/50">|</span>
                <span className="font-mono tracking-wide">esuk-celine</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-foreground">电话</span>
                <span className="text-muted-foreground/50">|</span>
                <a 
                  href="tel:+8618953579455" 
                  className="font-mono tracking-wide hover:text-foreground transition-colors"
                >
                  +86 189 5357 9455
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-16 md:pt-24 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-serif tracking-[0.2em]">此后</span>
              <span className="text-muted-foreground/50">|</span>
              <span className="tracking-[0.15em] uppercase">Thereafter</span>
            </div>
            <p className="text-center md:text-left">
              不承诺未来，也不修复过去
            </p>
            <span className="text-muted-foreground/50">{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
