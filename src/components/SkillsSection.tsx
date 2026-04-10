const skills = [
  { name: "React Native", level: 95 },
  { name: "Flutter", level: 88 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js", level: 85 },
  { name: "Swift / iOS", level: 78 },
  { name: "Kotlin / Android", level: 80 },
  { name: "System Design", level: 90 },
  { name: "Team Leadership", level: 93 },
];

const techStack = [
  "React Native", "Flutter", "TypeScript", "Swift", "Kotlin",
  "Firebase", "AWS", "GraphQL", "PostgreSQL", "Docker",
  "CI/CD", "Figma",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Skills</p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-16">
          Tools & <span className="text-gradient">expertise</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium text-secondary-foreground hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
