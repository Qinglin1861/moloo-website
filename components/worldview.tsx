"use client";

import { useEffect, useRef } from "react";
import { Leaf, Clock, Users, Sparkles } from "lucide-react";

interface WorldviewProps {
  onVisible: () => void;
}

const services = [
  {
    icon: Sparkles,
    title: "沉默",
    english: "SILENCE",
    description: "体验的价值在于不被言说",
  },
  {
    icon: Clock,
    title: "时间",
    english: "TIME",
    description: "空间只是时间的载体",
  },
  {
    icon: Leaf,
    title: "存在",
    english: "EXISTENCE",
    description: "存在本身，即是意义",
  },
  {
    icon: Users,
    title: "筛选",
    english: "SELECTION",
    description: "参与即筛选，价格是边界",
  },
];

export function Worldview({ onVisible }: WorldviewProps) {
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
      id="worldview"
      className="py-24 md:py-32 px-6 md:px-12 bg-background"
    >
      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
            不承诺未来，也不修复过去
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-[1px] bg-border" />
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="w-8 h-[1px] bg-border" />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            我们不修复，不承诺，不解释。
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            在沉默中感知时间，在时间中感知存在。
            我们相信体验的价值在于不被言说，
            相信参与者会在沉默中找到属于自己的答案。
          </p>
        </div>

        {/* Service icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-border group-hover:border-foreground transition-colors">
                <service.icon className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1} />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-sm font-medium tracking-wider">{service.title}</h3>
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                  {service.english}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
