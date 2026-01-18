"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavigationProps {
  activeSection: string;
}

const leftNavItems = [
  { id: "hero", label: "首页", english: "Home" },
  { id: "worldview", label: "世界观", english: "About" },
  { id: "timeline", label: "时间轴", english: "Timeline" },
];

const rightNavItems = [
  { id: "faq", label: "概念", english: "Concepts" },
  { id: "contact", label: "联系", english: "Contact" },
];

export function Navigation({ activeSection }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Left nav items */}
          <div className="hidden md:flex items-center gap-8">
            {leftNavItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-xs tracking-[0.15em] uppercase transition-colors duration-300",
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.english}
              </button>
            ))}
          </div>

          {/* Center logo */}
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="mx-8 md:mx-16 flex-shrink-0"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 relative rounded-full overflow-hidden border border-border">
              <Image
                src="/images/logo-light.jpg"
                alt="此后 THEREAFTER"
                fill
                className="object-cover"
              />
            </div>
          </button>

          {/* Right nav items */}
          <div className="hidden md:flex items-center gap-8">
            {rightNavItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-xs tracking-[0.15em] uppercase transition-colors duration-300",
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.english}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden absolute right-4 p-2"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <div className="w-5 h-[1px] bg-foreground" />
              <div className="w-5 h-[1px] bg-foreground" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
