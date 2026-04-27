import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-asphalt text-background mt-32">
      <div className="container py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-accent" />
              <span className="font-display text-2xl">PIVOT</span>
            </div>
            <h2 className="text-huge mb-8">
              Build with <span className="text-accent">conviction.</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-background/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent hover:border-accent transition-all duration-300"
            >
              Request a quote
              <span>→</span>
            </Link>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/50 mb-5">Studio</p>
            <address className="not-italic font-sans text-background/80 leading-relaxed">
              Harare <br />
              District 9, Block C<br />
             Zimbabwe
            </address>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/50 mb-5">Reach</p>
            <ul className="space-y-2 text-background/80">
              <li>+263 77 102 7343</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/50 mb-5">Index</p>
            <ul className="space-y-2">
              {["About", "Services", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase()}`} className="nav-link text-background/80 hover:text-accent">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-20 pt-8 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] text-background/50 uppercase tracking-[0.15em]">
          <span>© {new Date().getFullYear()} PIVOT Construction Group</span>
          <span>Engineered in concrete & steel</span>
        </div>
        <br />
         <div className="border-t border-background/10  pt-4 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] text-background/50 uppercase tracking-[0.15em]">
          <span>Developer</span>
          <a href="https://wa.me/263733517788" 
         target="_blank" 
         rel="noopener noreferrer"
         class="
           
           bg-[#25D366] 
           hover:bg-[#20B359] 
           text-white 
           font-bold 
          
          
           hover:scale-[1.02] 
           active:scale-[0.98]
           transition-all 
           duration-200 
           focus:outline-none 
           focus:ring-4 
           focus:ring-green-300/50
           w-full
           sm:w-auto
           cursor-pointer
         "
         aria-label="Chat with Neichnice Technologies on WhatsApp">  
        <span class="tracking-wide">Neichnice</span>
      </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
