// src/components/Projects.jsx

const projects = [
  {
    name: "VVCyperAware",
    subtitle: "Full-stack project (API + app)",
    description:
      "A larger project with an API layer and shared code, structured as a multi-project .NET solution.",
    tech: [".NET", "API", "SQL", "Testing", "Git"],
    bullets: [
      "Multi-project solution including an API and shared components.",
      "Worked in a larger codebase with clear project structure.",
      "Improved testing habits and separation of concerns across layers.",
    ],
    links: {
      code: "https://github.com/Tobias-soderberg/VVCyperAware",
    },
  },
  {
    name: "MOL-Datatrust",
    subtitle: "ASP.NET project (UI + backend)",
    description:
      "C# web project with typical ASP.NET structure (controllers/pages + wwwroot).",
    tech: ["C#", "ASP.NET", "Web", "HTML/CSS"],
    bullets: [
      "Implemented web structure with server-side logic and frontend assets.",
      "Worked with controllers/pages patterns and project organization.",
      "Built a maintainable web app structure.",
    ],
    links: {
      code: "https://github.com/Tobias-soderberg/MOL-Datatrust",
    },
  },
  {
    name: "GreenThumb",
    subtitle: "App + Database relationships",
    description:
      "Project focused on database modelling and relationships (ER-style), including migrations.",
    tech: ["C#", "Database", "Migrations", "ER modelling"],
    bullets: [
      "Designed database relationships (1:1, M:M, 1:M) based on an ER model.",
      "Implemented cascade-like behavior to keep data consistent.",
      "Practiced data modelling and relational reasoning.",
    ],
    links: {
      code: "https://github.com/Tobias-soderberg/GreenThumb",
    },
  },
  {
    name: "TravelPal",
    subtitle: "OOP + UML-driven design",
    description:
      "Project built using a provided UML design, with a focus on object modelling and structure.",
    tech: ["C#", "OOP", "UML", "Architecture"],
    bullets: [
      "Built UI first, then implemented full class structure from UML.",
      "Improved user-to-travel ownership through better data modelling.",
      "Delivered features page-by-page after architecture was set.",
    ],
    links: {
      code: "https://github.com/Tobias-soderberg/TravelPal",
    },
  },
  {
    name: "BunDrop-Project",
    subtitle: "Frontend project (React/JS + mock API)",
    description:
      "Webpage concept for a burger restaurant using drones, with local JSON server for data during development.",
    tech: ["JavaScript", "Frontend", "json-server", "npm"],
    bullets: [
      "Built a fun concept site using a local mock API.",
      "Practiced running frontend and API in parallel during development.",
      "Learned package setup and local dev workflows.",
    ],
    links: {
      code: "https://github.com/Tobias-soderberg/BunDrop-Project",
    },
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section__panel">
          <h2 className="section__title">Projects</h2>

          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.name}>
                <div className="row">
                  <h3 className="card__title">{p.name}</h3>
                  <span className="muted">{p.subtitle}</span>
                </div>

                <p className="section__text">{p.description}</p>

                <ul className="list">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <ul className="chips">
                  {p.tech.map((t) => (
                    <li className="chip" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="actions">
                  <a
                    className="btn btn--secondary"
                    href={p.links.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
