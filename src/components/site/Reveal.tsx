import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "h2" | "p";
}

const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.9s cubic-bezier(0.7,0,0.2,1) ${delay}ms, transform 0.9s cubic-bezier(0.7,0,0.2,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
