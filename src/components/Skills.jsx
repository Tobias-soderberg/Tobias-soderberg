// src/components/Skills.jsx

const skillGroups = [
  {
    title: "Languages",
    items: [
      "C#",
      "Java",
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "Bash",
      "SQL",
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      ".NET",
      "ASP.NET Core",
      "React",
      "Razor",
      "Blazor",
      "Git",
      "Azure DevOps",
      "Docker",
      "Azure",
      "Maven",
      "Gradle",
      "JUnit",
      "Hibernate",
    ],
  },
  {
    title: "Practices",
    items: [
      "Agile (Scrum & Kanban)",
      "Test-driven thinking",
      "Writing testable code",
      "Debugging & root-cause analysis",
      "Code reviews & collaboration",
      "Version control workflows",
      "Documentation & technical clarity",
      "Embedded systems & hardware interaction",
    ],
  },
  {
    title: "Domain / Strengths",
    items: [
      "UI development & debugging",
      "Simulation tools for testing",
      "Communication protocols",
      "System reliability & usability",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section__panel">
          <h2 className="section__title">Skills</h2>

          <div className="grid">
            {skillGroups.map((group) => (
              <article className="card" key={group.title}>
                <h3 className="card__title">{group.title}</h3>

                <ul className="chips">
                  {group.items.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
