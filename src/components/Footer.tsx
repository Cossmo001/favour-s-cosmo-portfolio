const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Olorunfemi Favour. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Twitter", "LinkedIn", "GitHub"].map((s) => (
          <a key={s} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
