export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__panel">
          <h2 className="section__title">Who is Tobias?</h2>
          <p className="section__text">
            Full-stack developer with a passion for building clean, efficient
            web applications.
            <br />
            Experienced in many languages including Java, React, C#, .NET, and
            SQL databases.
            <br />
            I enjoy creating intuitive user interfaces and robust APIs that
            solve real-world problems.
            <br />
            Always eager to learn new technologies and improve my skills.
          </p>

          <ul className="meta">
            <li>
              <strong>Location:</strong> Porto, PT
            </li>
            <li>
              <strong>Availability:</strong> Open to work
            </li>
            <li>
              <strong>Interests:</strong> Backend, Scripts, APIs, clean code,
              Web apps
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
