import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="group flex items-center gap-2" aria-label="PIVOT home">
          <div className="w-3 h-3 bg-accent group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-display text-2xl tracking-tighter">PIVOT</span>
          <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline">/ SINCE 2015</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav-link font-mono text-xs uppercase tracking-[0.2em] ${isActive ? "active text-foreground" : "text-foreground/70"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-300"
        >
          Start a project
          <span className="w-1.5 h-1.5 bg-accent group-hover:bg-foreground" />
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-background border-b border-border ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container flex flex-col py-8 gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-display text-3xl ${isActive ? "text-accent" : "text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
