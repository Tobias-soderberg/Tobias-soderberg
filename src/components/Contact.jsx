export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section__panel">
          <h2 className="section__title">Contact</h2>

          <div className="card">
            <p className="section__text">
              Want to talk? Email me or find me here:
            </p>

            <ul className="contact">
              <li>
                <a href="mailto:tobias-soderberg@outlook.com">
                  tobias-soderberg@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/tobias-soderberg"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tobias-soderberg"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
