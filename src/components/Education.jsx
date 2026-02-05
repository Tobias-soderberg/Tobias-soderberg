// src/components/Education.jsx

const education = [
  {
    school: "Newton Kompetensutveckling, Malmö, Sweden",
    degree: "System Development .NET",
    year: "2023–2025",
    bullets: [
      {
        highlight: "Focused on",
        text: "building secure, scalable applications with C# and .NET.",
      },
      {
        highlight: "Practiced",
        text: "APIs, databases, web development, and cloud fundamentals.",
      },
      {
        highlight: "Worked with",
        text: "Agile methods, Git workflows, Docker, and Azure tooling.",
      },
      {
        highlight: "Built",
        text: "multiple projects using SQL databases and modern frontend with React.",
      },
    ],
    languages: ["C#", "SQL", "JavaScript", "React", ".NET", "ASP.NET Core"],
  },
  {
    school: "Linköping University, Linköping, Sweden",
    degree: "Computer Science",
    year: "2017–2018, 2021–2023",
    bullets: [
      {
        highlight: "Studied",
        text: "core CS topics like algorithms, data structures, and software engineering.",
      },
      {
        highlight: "Learned",
        text: "low-level and underlying computer systems concepts.",
      },
      {
        highlight: "Built",
        text: "projects in multiple languages while developing strong CS foundations.",
      },
    ],
    languages: ["Java", "Python", "C", "C++"],
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section__panel">
          <h2 className="section__title">Education</h2>

          {/* Cleaner alternative to the long paragraph */}
          <div className="stack">
            <div className="card card--intro">
              <h3 className="card__title">Summary</h3>
              <ul className="list">
                <li>
                  <strong>Started early:</strong> I’ve been programming since I
                  was 15, learning by building small projects.
                </li>
                <li>
                  <strong>University foundation:</strong> Studied computer
                  science theory and fundamentals at Linköping University.
                </li>
                <li>
                  <strong>Practical .NET focus:</strong> Vocational program at
                  Newton with hands-on projects using .NET, SQL, and React.
                </li>
              </ul>
            </div>

            {education.map((e) => (
              <article
                className="card"
                key={`${e.school}-${e.degree}-${e.year}`}
              >
                <div className="row">
                  <h3 className="card__title">{e.degree}</h3>
                  <span className="muted">{e.year}</span>
                </div>

                {/* School: bold + bright */}
                <p className="company">
                  <strong>{e.school}</strong>
                </p>

                {e.bullets?.length ? (
                  <ul className="list">
                    {e.bullets.map((b, i) => (
                      <li key={i}>
                        <strong>{b.highlight}</strong> {b.text}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {e.languages?.length ? (
                  <ul className="chips">
                    {e.languages.map((l) => (
                      <li key={l} className="chip">
                        {l}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
