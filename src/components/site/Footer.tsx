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
         <div className="border-t border-background/10 mt-20 pt-8 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] text-background/50 uppercase tracking-[0.15em]">
          <span>© {new Date().getFullYear()}Developed by</span>
          <a href="https://wa.me/263733517788" 
         target="_blank" 
         rel="noopener noreferrer"
         class="
           group
           inline-flex 
           items-center 
           justify-center 
           gap-3 
           bg-[#25D366] 
           hover:bg-[#20B359] 
           text-white 
           font-bold 
           text-lg 
           md:text-xl 
           py-3.5 
           px-7 
           md:py-4 
           md:px-10 
           rounded-2xl 
           shadow-lg 
           hover:shadow-xl 
           transform 
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
        

        <span class="flex items-center justify-center w-6 h-6 md:w-7 md:h-7">
          <svg class="w-full h-full fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.032 2.001c-5.516 0-10 4.484-10 10 0 1.762.456 3.468 1.322 4.98L2.03 22.27l5.41-1.436c1.45.791 3.099 1.227 4.827 1.227 5.516 0 10-4.484 10-10s-4.484-10-10-10zm0 18.378c-1.575 0-3.09-.427-4.42-1.224l-.317-.188-3.212.852.857-3.138-.205-.328a7.393 7.393 0 0 1-1.176-3.974c0-4.074 3.315-7.389 7.389-7.389s7.389 3.315 7.389 7.389-3.315 7.389-7.389 7.389zm4.111-5.518c-.225-.113-1.334-.659-1.541-.734-.207-.075-.357-.113-.507.113-.15.226-.584.734-.716.885-.132.151-.264.169-.489.056-.225-.113-.951-.35-1.812-1.118-.67-.597-1.122-1.334-1.254-1.559-.132-.226-.014-.348.099-.46.103-.101.226-.264.339-.396.113-.132.15-.226.226-.377.075-.151.038-.283-.019-.396-.056-.113-.507-1.223-.694-1.674-.182-.44-.367-.38-.507-.387-.13-.006-.283-.007-.435-.007-.151 0-.396.057-.603.283-.207.226-.792.774-.792 1.887 0 1.113.81 2.188.923 2.339.113.151 1.595 2.435 3.864 3.415.54.233.961.372 1.291.477.542.173 1.036.149 1.426.09.435-.065 1.334-.545 1.521-1.072.188-.526.188-.977.132-1.071-.056-.094-.207-.151-.432-.264z"/>
          </svg>
        </span>
        
       
        <span class="tracking-wide">Neichnice Technologies</span>
        
      
        <span class="text-sm md:text-base transition-all duration-200 group-hover:translate-x-0.5">💬</span>
      </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
