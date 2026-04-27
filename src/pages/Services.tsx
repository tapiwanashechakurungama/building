import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const services = [
  {
    n: "01",
    t: "Structural Engineering",
    tagline: "Load paths, signed.",
    d: "Full structural design for high-rise, mid-rise, and complex span buildings. Seismic detailing, foundation engineering, and post-tensioned concrete.",
    items: ["Reinforced concrete design", "Structural steel", "Seismic & wind analysis", "Foundation engineering"],
  },
  {
    n: "02",
    t: "General Contracting",
    tagline: "One throat to choke.",
    d: "Turn-key construction management with self-performed structural work. Schedule, budget, and safety owned end-to-end.",
    items: ["Project management", "Cost control", "Schedule delivery", "QA / QC"],
  },
  {
    n: "03",
    t: "Civil & Infrastructure",
    tagline: "Public works, built right.",
    d: "Bridges, highways, water systems and site infrastructure delivered to public-sector specification.",
    items: ["Bridges & viaducts", "Site grading & drainage", "Utility coordination", "Public-sector compliance"],
  },
  {
    n: "04",
    t: "Design–Build",
    tagline: "Drawing to keys, one team.",
    d: "Integrated architecture and execution under one accountable contract. Faster delivery, fewer interfaces.",
    items: ["Architectural design", "MEP integration", "Permit management", "Owner representation"],
  },
  {
    n: "05",
    t: "Restoration & Retrofit",
    tagline: "Make the old structure work.",
    d: "Seismic retrofit, structural reinforcement, and adaptive reuse for legacy buildings.",
    items: ["Structural assessment", "Carbon-fiber reinforcement", "Façade restoration", "Adaptive reuse"],
  },
  {
    n: "06",
    t: "Pre-Construction",
    tagline: "Stop bad projects early.",
    d: "Constructability review, value engineering, and feasibility studies before you commit a single dollar to dirt.",
    items: ["Feasibility studies", "Value engineering", "Constructability review", "Cost modeling"],
  },
];

const Services = () => {
  return (
    <>
      <section className="container pt-40 pb-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-6 animate-fade-in">◤ Capabilities</p>
        <h1 className="text-mega max-w-[16ch] animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Six disciplines. <span className="text-accent">One standard.</span>
        </h1>
      </section>

      <section className="border-t border-foreground">
        {services.map((s, i) => (
          <Reveal key={s.n} className="border-b border-foreground group">
            <div className="container py-16 grid lg:grid-cols-12 gap-8 items-start hover:bg-asphalt hover:text-background transition-colors duration-500 -mx-6 px-6 lg:-mx-0 lg:px-0">
              <div className="lg:col-span-1">
                <span className="font-mono text-xs">/ {s.n}</span>
              </div>
              <div className="lg:col-span-4">
                <h2 className="font-display text-4xl md:text-5xl leading-none">{s.t}</h2>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mt-4">{s.tagline}</p>
              </div>
              <p className="lg:col-span-4 text-lg leading-relaxed opacity-80">{s.d}</p>
              <ul className="lg:col-span-3 space-y-2 font-mono text-xs uppercase tracking-[0.15em]">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container py-32 text-center">
        <Reveal>
          <h2 className="text-huge max-w-3xl mx-auto">
            Don't see your project? <span className="text-accent">Talk to us anyway.</span>
          </h2>
          <a href="/contact" className="inline-flex items-center gap-3 mt-12 bg-foreground text-background px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors group">
            Start a conversation <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
          </a>
        </Reveal>
      </section>
    </>
  );
};

export default Services;
