import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-construction.jpg";
import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import infrastructure from "@/assets/project-infrastructure.jpg";
import Marquee from "@/components/site/Marquee";
import Reveal from "@/components/site/Reveal";
import Counter from "@/components/site/Counter";

const services = [
  { n: "01", t: "Structural Engineering", d: "Load-bearing systems, seismic design, and foundation engineering for towers up to 60 stories." },
  { n: "02", t: "General Contracting", d: "Turn-key delivery from groundbreak to handover with rigorous schedule control." },
  { n: "03", t: "Infrastructure", d: "Bridges, highways, water systems and civil works delivered to public-sector spec." },
  { n: "04", t: "Design–Build", d: "Integrated architecture and execution under one accountable team." },
];

const projects = [
  { img: residential, name: "Meridian Tower", type: "Residential", year: "2024", loc: "New Cairo" },
  { img: commercial, name: "Forge District", type: "Commercial", year: "2023", loc: "Alexandria" },
  { img: infrastructure, name: "North Causeway", type: "Infrastructure", year: "2024", loc: "Suez" },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-asphalt text-background">
        <img
          src={hero}
          alt="Skyscraper under construction at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/40 to-asphalt/30" />
        <div className="absolute inset-0 grid-lines opacity-20" />

        {/* Vertical side label */}
        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center font-mono text-[11px] uppercase tracking-[0.4em] text-background/60">
          T#ONE CONSTRUCTION INVESTMENT T/A / Build № 0001 — Cairo
        </div>

        <div className="container relative z-10 pb-20 pt-40">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 animate-fade-in">
            ◤ Construction Group / Since 2015
          </p>
          <h1 className="text-mega max-w-[14ch]">
            <span className="block clip-reveal" style={{ animationDelay: "0.1s" }}>WE BUILD</span>
            <span className="block clip-reveal text-accent" style={{ animationDelay: "0.4s" }}>WHAT LASTS.</span>
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-5 text-lg text-background/80 max-w-md animate-fade-in" style={{ animationDelay: "0.7s" }}>
              T#ONE CONSTRUCTION INVESTMENT T/A is a construction group engineering high-performance buildings, infrastructure, and civil works across the region — on schedule, on budget, and built to outlive the contract.
            </p>
            <div className="md:col-span-4 md:col-start-9 flex gap-4 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <Link to="/projects" className="group bg-accent text-accent-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] inline-flex items-center gap-3 hover:bg-background hover:text-foreground transition-colors duration-300">
                See projects <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link to="/contact" className="border border-background/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-background hover:text-foreground transition-colors duration-300">
                Get a quote
              </Link>
            </div>
          </div>
        </div>

        {/* bottom strip */}
        <div className="relative z-10 border-t border-background/15 grid grid-cols-2 md:grid-cols-4 font-mono text-[11px] uppercase tracking-[0.2em]">
          {[
            ["Active sites", "12"],
            ["Sq. meters built", "1.4M"],
            ["Engineers", "180+"],
            ["Years", "16"],
          ].map(([k, v]) => (
            <div key={k} className="border-l border-background/15 first:border-l-0 px-6 py-5 flex items-center justify-between">
              <span className="text-background/50">{k}</span>
              <span className="text-background text-base font-display">{v}</span>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={["Concrete", "Steel", "Glass", "Engineered", "Delivered", "Built to last"]} />

      {/* INTRO */}
      <section className="container py-32 grid lg:grid-cols-12 gap-12">
        <Reveal as="div" className="lg:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4">◤ 001 / Practice</p>
          <h2 className="text-huge">A studio that builds.</h2>
        </Reveal>
        <Reveal as="div" delay={150} className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed">
          <p>
            We work at the intersection of structural engineering and craft. Every project begins with the same question: <em className="text-accent not-italic">how do we make this last fifty years past the warranty?</em>
          </p>
          <p className="text-muted-foreground">
            From foundation slab to roofline, our crews and engineers deliver one accountable line of execution. No subcontractor games. No surprise change orders. Just the building you specified, delivered when we said it would be.
          </p>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="bg-asphalt text-background py-32">
        <div className="container">
          <div className="flex justify-between items-end mb-20">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4">◤ 002 / Services</p>
              <h2 className="text-huge">Capabilities.</h2>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors">
              Full list <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-background/10">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="bg-asphalt p-10 group hover:bg-accent transition-colors duration-500 cursor-pointer">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs text-background/40 group-hover:text-background transition-colors">/ {s.n}</span>
                  <ArrowUpRight className="w-5 h-5 text-background/40 group-hover:text-background group-hover:rotate-45 transition-all duration-500" />
                </div>
                <h3 className="font-display text-3xl mb-4">{s.t}</h3>
                <p className="text-background/70 group-hover:text-background/90 transition-colors max-w-md">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container py-32">
        <div className="flex justify-between items-end mb-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4">◤ 003 / Selected Work</p>
            <h2 className="text-huge">Recent builds.</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors">
            All projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className={`group cursor-pointer ${i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-12 md:max-w-3xl"}`}>
              <div className="overflow-hidden bg-concrete aspect-[4/5] mb-5">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              </div>
              <div className="flex justify-between items-baseline">
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

      {/* STATS */}
      <section className="bg-accent text-accent-foreground py-32 overflow-hidden relative">
        <div className="container relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-12 opacity-70">◤ 004 / By the numbers</p>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { n: 240, s: "+", l: "Projects delivered" },
              { n: 16, s: "yr", l: "Continuous operation" },
              { n: 98, s: "%", l: "On-time handover" },
              { n: 0, s: "", l: "Major safety incidents in 2024" },
            ].map((stat, i) => (
              <Reveal key={stat.l} delay={i * 100}>
                <div className="text-mega leading-none">
                  <Counter end={stat.n} suffix={stat.s} />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] mt-4 opacity-80">{stat.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-32">
        <Reveal className="border-t border-foreground pt-12">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <h2 className="text-huge md:col-span-8">
              Have a site? <span className="text-accent">Let's break ground.</span>
            </h2>
            <Link
              to="/contact"
              className="md:col-span-4 inline-flex items-center justify-between bg-foreground text-background px-8 py-6 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-300 group"
            >
              Start a project
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
