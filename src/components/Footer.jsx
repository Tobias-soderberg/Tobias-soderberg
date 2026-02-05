export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="muted">© {new Date().getFullYear()} Tobias Söderberg</span>
        <span className="muted">Built with React</span>
      </div>
    </footer>
  );
}
