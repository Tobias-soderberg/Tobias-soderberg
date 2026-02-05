export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div>
          <h1 className="header__name">Tobias Söderberg</h1>
          <p className="header__title">
            Software Developer • Java • C# • .NET • React
          </p>
        </div>

        <nav className="header__links" aria-label="Quick links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="/CV_Tobias_Soderberg.pdf" target="_blank" rel="noreferrer">
            View my CV
          </a>
        </nav>
      </div>
    </header>
  );
}
