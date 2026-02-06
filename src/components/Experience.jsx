// src/components/Experience.jsx

const experience = [
  {
    company: "Efacec, Porto, Portugal",
    role: "Software Developer Intern",
    start: "Sep 2024",
    end: "Jun 2025",
    bullets: [
      {
        highlight: "Built",
        text: "realistic EV charger simulations to speed up testing and troubleshooting.",
      },
      {
        highlight: "Improved",
        text: "UI usability and reliability by contributing to development and debugging of charger interfaces.",
      },
      {
        highlight: "Enhanced",
        text: "communication protocols to make testing workflows faster and more dependable.",
      },
      {
        highlight: "Delivered",
        text: "high-impact results within a short internship period and received strong feedback for quality and impact.",
      },
    ],
  },
  {
    company: "McDonald’s, Tornby Linköping, Sweden",
    role: "Shift Manager",
    start: "Feb 2020",
    end: "Sep 2022",
    bullets: [
      {
        highlight: "Led",
        text: "service and production, supervising teams of 10–30 people in a fast-paced environment.",
      },
      {
        highlight: "Ensured",
        text: "food quality, cleanliness standards, and consistent customer experience during shifts.",
      },
      {
        highlight: "Managed",
        text: "inventory and ordering for six months, strengthening planning and operational ownership.",
      },
      {
        highlight: "Developed",
        text: "strong communication, leadership, and problem-solving under pressure.",
      },
    ],
  },
  {
    company: "McDonald’s, Tornby Linköping, Sweden",
    role: "Team Member",
    start: "Oct 2018",
    end: "Feb 2020",
    bullets: [
      {
        highlight: "Worked",
        text: "across customer service, production, and cleanliness to support smooth operations.",
      },
      {
        highlight: "Maintained",
        text: "high standards of food quality and speed through teamwork and reliability.",
      },
      {
        highlight: "Contributed",
        text: "to a positive customer experience by staying flexible and consistent across roles.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section__panel">
          <h2 className="section__title">Experience</h2>

          <div className="stack">
            {experience.map((job) => (
              <article
                className="card"
                key={`${job.company}-${job.role}-${job.start}`}
              >
                <div className="row">
                  <h3 className="card__title">{job.role}</h3>
                  <span className="muted">
                    {job.start} — {job.end}
                  </span>
                </div>

                {/* Company: bold + bright */}
                <p className="company">
                  <strong>{job.company}</strong>
                </p>

                {/* Achievement bullets: highlight + text */}
                <ul className="list">
                  {job.bullets.map((b, i) => (
                    <li key={i}>
                      <strong>{b.highlight}</strong> {b.text}
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
