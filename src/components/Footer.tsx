const socialLinks = [
  { name: "Twitter", url: "#" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/olorunfemi-favour-49582a288/" },
  { name: "GitHub", url: "https://github.com/cosmo-0910" },
];

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Olorunfemi Favour. All rights reserved.
      </p>
      <div className="flex gap-6">
        {socialLinks.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {s.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
