"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { Worldview } from "@/components/worldview";
import { Timeline } from "@/components/timeline";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} />
      <Hero onVisible={() => setActiveSection("hero")} />
      <Worldview onVisible={() => setActiveSection("worldview")} />
      <Timeline onVisible={() => setActiveSection("timeline")} />
      <FAQ onVisible={() => setActiveSection("faq")} />
      <Contact onVisible={() => setActiveSection("contact")} />
    </main>
  );
}
