import { useState, useRef, useEffect } from "react";

const brands = [
  { name: "Cosmo Intents Lab", image: "/brands/cosmointlogotype2.png", link: "https://www.cosmoint24.com.ng" },
  { name: "Transhub Global Resources", image: "/brands/Transhub Global Resouces.png", link: "https://transhub.cars" },
  { name: "Fedatify", image: "/brands/fedatify.png", link: "#" },
  { name: "AFS Foundation", image: "/brands/Afs foundation.png", link: "#" },
  { name: "Marolan Group", image: "/brands/marolan group.png", link: "#" },
  { name: "Marolan Medicals", image: "/brands/marolan medicals logo.png", link: "#" },
  { name: "Serene", image: "/brands/serene.png", link: "#" },
  { name: "SP Systems", image: "/brands/sp systems and net solutions.png", link: "#" },
];

const BrandsStrip = () => {
  const [activeCenter, setActiveCenter] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;
    const items = container.querySelectorAll(".brand-item");
    
    let closestIndex = 0;
    let minDistance = Infinity;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const distance = Math.abs(itemCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveCenter(closestIndex);
  };

  return (
    <section className="py-24 border-y border-border overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <p className="text-sm text-muted-foreground uppercase tracking-widest text-center">
          Brands I've Worked With
        </p>
      </div>
      
      {/* Desktop Marquee */}
      <div className="hidden lg:block relative">
        <div className="flex animate-marquee w-max gap-32 px-8 items-center">
          {[...brands, ...brands].map((brand, i) => (
            <a
              key={i}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 hover:scale-110"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-20 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Scroll-Snap */}
      <div className="lg:hidden relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-12 px-[40%] scroll-smooth no-scrollbar snap-x snap-mandatory items-center pb-8"
        >
          {brands.map((brand, i) => (
            <a
              key={i}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`brand-item flex-shrink-0 transition-all duration-500 snap-center ${
                activeCenter === i ? "grayscale-0 opacity-100 scale-125" : "grayscale opacity-30 scale-90"
              }`}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] opacity-40">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default BrandsStrip;
