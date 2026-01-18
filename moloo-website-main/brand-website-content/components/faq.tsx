"use client";

import { useEffect, useRef } from "react";

interface FAQProps {
  onVisible: () => void;
}

export function FAQ({ onVisible }: FAQProps) {
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
      id="faq"
      className="py-24 md:py-32 px-6 md:px-12 bg-background"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Quote */}
        <blockquote className="space-y-6">
          <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground italic">
            &ldquo;Surround yourself with the dreamers and the doers, the believers and thinkers, 
            but most of all surround yourself with those who see greatness within you, 
            even when you don&apos;t see it yourself.&rdquo;
          </p>
          <footer className="text-xs tracking-[0.15em] text-muted-foreground/60 uppercase">
            &mdash; Edmund Lee
          </footer>
        </blockquote>

        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-[1px] bg-border" />
          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="w-8 h-[1px] bg-border" />
        </div>

        {/* Chinese quote */}
        <blockquote className="space-y-4">
          <p className="font-serif text-base md:text-lg leading-relaxed text-muted-foreground">
            与梦想家和实干家为伍，与相信者和思考者同行，<br />
            但最重要的是，与那些在你看不见自己光芒时依然相信你的人同在。
          </p>
        </blockquote>
      </div>
    </section>
  );
}
