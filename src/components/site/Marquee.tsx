const Marquee = ({ items }: { items: string[] }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-foreground bg-background py-6">
      <div className="marquee-track gap-12">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-3xl md:text-5xl uppercase">{it}</span>
            <span className="w-3 h-3 bg-accent rotate-45 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
