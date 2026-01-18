"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TimelineProps {
  onVisible: () => void;
}

const locations = [
  { 
    name: "景德镇", 
    english: "Jingdezhen", 
    symbol: "瓷",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop&q=80",
    description: "泥与火的沉默"
  },
  { 
    name: "云南", 
    english: "Yunnan", 
    symbol: "山",
    image: "https://images.unsplash.com/photo-1609766856923-7e0a0c06086d?w=400&h=400&fit=crop&q=80",
    description: "山与云的边界"
  },
  { 
    name: "英国", 
    english: "UK", 
    symbol: "石",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop&q=80",
    description: "古老的沉默"
  },
];

const logos = locations; // Declare the logos variable

export function Timeline({ onVisible }: TimelineProps) {
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
      id="timeline"
      className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
                时间轴节点
              </h2>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                三个时间节点，三种沉默的形态。<br />
                我们不呈现行程、价格、工具或成果。<br />
                空间只是时间的载体。
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-primary-foreground/50 leading-relaxed">
                在泥与火的沉默中，感知时间的形状。<br />
                在山与云的边界，丈量存在的厚度。<br />
                在古老的沉默里，与时间对坐。
              </p>
            </div>

            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-xs tracking-[0.15em] uppercase px-8 bg-transparent"
            >
              Contact Us
            </Button>
          </div>

          {/* Right - Logo grid */}
          <div className="space-y-8">
            {/* Main logo */}
            <div className="flex justify-center md:justify-end">
              <div className="w-32 h-32 md:w-40 md:h-40 relative">
                <Image
                  src="/images/logo-dark.jpg"
                  alt="此后 THEREAFTER"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Location cards with images */}
            <div className="grid grid-cols-3 gap-4">
              {locations.map((location) => (
                <div
                  key={location.name}
                  className="group flex flex-col border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors overflow-hidden"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-3xl text-white/80">
                      {location.symbol}
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-xs tracking-wide block">{location.name}</span>
                    <span className="text-[9px] tracking-[0.1em] text-primary-foreground/50 uppercase">
                      {location.english}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
