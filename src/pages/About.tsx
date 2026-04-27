import about from "@/assets/about-team.jpg";
import Reveal from "@/components/site/Reveal";
import Counter from "@/components/site/Counter";

const principles = [
  { n: "01", t: "Engineer first", d: "Every drawing is signed by a structural engineer before a single laborer is dispatched." },
  { n: "02", t: "Own the chain", d: "We self-perform foundations, concrete, and structural steel. Fewer hands. Fewer excuses." },
  { n: "03", t: "Schedule is sacred", d: "We publish a schedule and we hit it. Late on us means a credit on your invoice." },
  { n: "04", t: "Safety is non-negotiable", d: "Zero major incidents in 2024. We will not compromise this for any deadline." },
];

const team = [
  { name: "Layla Mansour", role: "Managing Principal" },
  { name: "Karim Adel", role: "Director of Engineering" },
  { name: "Hana Sobhy", role: "Head of Operations" },
  { name: "Omar Tarek", role: "Site Director, Cairo" },
];

const About = () => {
  return (
    <>
      <section className="container pt-40 pb-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-6 animate-fade-in">◤ Practice</p>
        <h1 className="text-mega max-w-[14ch] animate-fade-in" style={{ animationDelay: "0.1s" }}>
          A studio of <span className="text-accent">builders.</span>
        </h1>
      </section>

      <section className="container grid lg:grid-cols-12 gap-12 pb-32">
        <Reveal className="lg:col-span-7">
          <img src={about} alt="Engineer reviewing site plans" loading="lazy" className="w-full aspect-[4/3] object-cover" />
        </Reveal>
        <Reveal delay={150} className="lg:col-span-5 flex flex-col justify-end space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Founded 2009</p>
          <p className="text-xl leading-relaxed">
            PIVOT was started by two structural engineers who were tired of watching good drawings turn into mediocre buildings.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Sixteen years later we are 180 engineers, foremen, and craftspeople operating across Egypt and the Gulf — still owned and led by the people who sign the structural calcs.
          </p>
        </Reveal>
      </section>

      {/* Principles */}
      <section className="bg-asphalt text-background py-32">
        <div className="container">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4">◤ Principles</p>
            <h2 className="text-huge mb-20">Four rules we don't break.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-background/10">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 100} className="bg-asphalt p-10">
                <span className="font-mono text-xs text-accent">/ {p.n}</span>
                <h3 className="font-display text-3xl mt-6 mb-4">{p.t}</h3>
                <p className="text-background/70 max-w-md">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-32">
        <div className="grid md:grid-cols-3 gap-12 border-y border-foreground py-16">
          {[
            { n: 180, l: "Team members" },
            { n: 16, l: "Years operating" },
            { n: 240, l: "Completed builds" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="text-huge"><Counter end={s.n} suffix="+" /></div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] mt-3 text-muted-foreground">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container pb-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4">◤ Leadership</p>
          <h2 className="text-huge mb-16">Who runs the build.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} className="bg-background p-8 hover:bg-accent hover:text-accent-foreground transition-colors duration-500 group cursor-pointer aspect-square flex flex-col justify-between">
              <span className="font-mono text-xs">/ 0{i + 1}</span>
              <div>
                <h3 className="font-display text-2xl">{m.name}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] mt-2 opacity-70">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
