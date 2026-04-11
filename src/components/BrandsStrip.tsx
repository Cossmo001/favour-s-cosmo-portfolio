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
  return (
    <section className="py-16 border-y border-border overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <p className="text-sm text-muted-foreground uppercase tracking-widest text-center">
          Brands I've Worked With
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max gap-20 px-8 items-center">
          {[...brands, ...brands].map((brand, i) => (
            <a
              key={i}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-12 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsStrip;
