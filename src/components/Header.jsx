// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__brand">
          <img src="/logo.png" alt="Tobias logo" className="header__logo" />
          <h1 className="header__name">Tobias Söderberg</h1>
          <p className="header__title">
            Software Developer • Java • C# • .NET • React
          </p>
        </div>

        <div className="header__actions">
          <a
            className="btn btn--secondary btn--cv"
            href="/CV_Tobias_Soderberg.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>

          <button
            className="btn btn--menu"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`nav ${open ? "nav--open" : ""}`}
          aria-label="Quick links"
        >
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="#education" onClick={() => setOpen(false)}>
            Education
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
