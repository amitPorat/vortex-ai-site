import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Nav />
      <Hero />
      <ProblemSolution />
      <Services />
      <Pricing />
      <Founder />
      <Contact />
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Vortex Data & AI. All rights reserved.
      </footer>
    </main>
  );
}
