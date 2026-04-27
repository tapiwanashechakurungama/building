import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404:", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-asphalt text-background grid-lines">
      <div className="container text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">◤ Off-plan</p>
        <h1 className="text-mega text-accent">404</h1>
        <p className="font-display text-3xl mt-4">This site doesn't exist on our blueprint.</p>
        <Link to="/" className="inline-flex items-center gap-2 mt-12 border border-background/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent hover:border-accent transition-all">
          Return to ground floor →
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
