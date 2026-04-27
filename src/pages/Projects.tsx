import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import infrastructure from "@/assets/project-infrastructure.jpg";
import hero from "@/assets/hero-construction.jpg";
import Reveal from "@/components/site/Reveal";

const projects = [
  { img: residential, name: "Meridian Tower", type: "Residential", year: "2024", loc: "New Cairo", area: "42,000 m²", scope: "Design–Build" },
  { img: commercial, name: "Forge District", type: "Commercial", year: "2023", loc: "Alexandria", area: "118,000 m²", scope: "General Contracting" },
  { img: infrastructure, name: "North Causeway", type: "Infrastructure", year: "2024", loc: "Suez", area: "2.4 km", scope: "Civil Works" },
  { img: hero, name: "Helix Headquarters", type: "Commercial", year: "2025", loc: "Cairo", area: "60,000 m²", scope: "Design–Build" },
  { img: residential, name: "Riverline Residences", type: "Residential", year: "2022", loc: "Zamalek", area: "28,000 m²", scope: "General Contracting" },
  { img: commercial, name: "South Bay Logistics", type: "Industrial", year: "2024", loc: "Ain Sokhna", area: "210,000 m²", scope: "Design–Build" },
];

const filters = ["All", "Residential", "Commercial", "Infrastructure", "Industrial"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter((p) => filter === "All" || p.type === filter);

  return (
    <>
      <section className="container pt-40 pb-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-6 animate-fade-in">◤ Selected Work</p>
        <h1 className="text-mega animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Built work, <span className="text-accent">indexed.</span>
        </h1>
      </section>

      {/* filter bar */}
      <section className="border-y border-foreground">
        <div className="container flex flex-wrap gap-px bg-border">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                filter === f ? "bg-foreground text-background" : "bg-background hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((p, i) => (
            <Reveal key={p.name + i} delay={i * 80} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-concrete aspect-[4/5]">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-asphalt opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-between p-6 text-background">
                  <ArrowUpRight className="w-6 h-6 self-end" />
                  <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <div className="flex justify-between"><span className="opacity-50">Scope</span><span>{p.scope}</span></div>
                    <div className="flex justify-between"><span className="opacity-50">Area</span><span>{p.area}</span></div>
                    <div className="flex justify-between"><span className="opacity-50">Location</span><span>{p.loc}</span></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-baseline mt-5">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                {p.type} · {p.loc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
