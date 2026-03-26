import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Services } from "@/components/Services";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Pricing } from "@/components/Pricing";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/hero-visual.png"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/55 to-slate-900/85" />
      </div>
      <div className="relative z-10">
        <Nav />
        <Hero />
        <ProblemSolution />
        <Services />
        <WhoWeServe />
        <Pricing />
        <Founder />
        <Contact />
        <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Vortex Data & AI. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
