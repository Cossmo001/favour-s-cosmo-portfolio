const brands = [
  "Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5",
  "Brand 6", "Brand 7", "Brand 8",
];

const BrandsStrip = () => {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <p className="text-sm text-muted-foreground uppercase tracking-widest text-center">
          Brands I've Worked With
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max gap-16 px-8">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 text-2xl font-semibold text-foreground/15 hover:text-primary/40 transition-colors whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsStrip;
