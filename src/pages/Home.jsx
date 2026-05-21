import "../style/Home.css";
export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Hi, I'm Sushma</h1>

        <h2>Frontend Developer</h2>

        <p>
          Passionate about building responsive and user-friendly web
          applications using React JS, JavaScript, HTML and CSS.
        </p>

        <button>View Projects</button>
      </section>

      {/* About Preview */}
      <section className="section-card">
        <h2>About Me</h2>

        <p>
          Aspiring developer focused on improving frontend development skills
          and building modern web applications.
        </p>
      </section>

      {/* Skills Preview */}
      <section className="section-card">
        <h2>Skills</h2>

        <div className="skills-container">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>GitHub</span>
          <span>SQL</span>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-card">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built using React JS.</p>
        </div>

        <div className="project-card">
          <h3>Profile Card Project</h3>
          <p>Responsive profile card using HTML, CSS and JavaScript.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Sushma | Frontend Developer</p>
      </footer>
    </div>
  );
}