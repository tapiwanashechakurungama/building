import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Brief received.", description: "We'll be in touch within 48 hours." });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <section className="container pt-40 pb-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-6 animate-fade-in">◤ Contact</p>
        <h1 className="text-mega max-w-[14ch] animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Tell us about <span className="text-accent">the site.</span>
        </h1>
      </section>

      <section className="container grid lg:grid-cols-12 gap-12 pb-32">
        <Reveal className="lg:col-span-7">
          <form onSubmit={onSubmit} className="space-y-8 border-t border-foreground pt-12">
            {[
              { id: "name", label: "01 / Your name", type: "text", placeholder: "Layla Mansour" },
              { id: "email", label: "02 / Email", type: "email", placeholder: "you@company.com" },
              { id: "company", label: "03 / Company", type: "text", placeholder: "Optional" },
              { id: "site", label: "04 / Project location", type: "text", placeholder: "City, country" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required={f.id !== "company"}
                  placeholder={f.placeholder}
                  className="w-full bg-transparent border-b border-foreground py-3 font-display text-2xl placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            ))}

            <div>
              <label htmlFor="brief" className="block font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                05 / Project brief
              </label>
              <textarea
                id="brief"
                rows={5}
                required
                placeholder="Scope, schedule, scale — whatever you have."
                className="w-full bg-transparent border-b border-foreground py-3 text-lg placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="group inline-flex items-center justify-between gap-12 bg-foreground text-background px-8 py-6 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-300 disabled:bg-accent"
            >
              {sent ? "Brief received ✓" : "Submit brief"}
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-4 lg:col-start-9 space-y-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4">Studio</p>
            <p className="font-display text-2xl leading-tight">
              482 Industrial Way<br />
              District 9, Block C<br />
              Cairo, Egypt
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4">Direct</p>
            <ul className="space-y-2 text-lg">
              <li>hello@pivot.build</li>
              <li>+20 100 482 9001</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4">Hours</p>
            <p className="text-lg">Sun–Thu, 08:00 — 18:00 EET</p>
          </div>
          <div className="border-t border-foreground pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Average response time: <span className="text-accent">14 hours</span>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Contact;
