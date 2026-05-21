import "../style/About.css";

export default function About() {
  return (
    <div className="about-container">

      <section className="about-hero">
        <h1>About Me</h1>

        <p>
          I am an aspiring Frontend Developer passionate about building
          responsive and user-friendly web applications.
        </p>
      </section>

      {/* Education */}
      <section className="about-card">
        <h2>Education</h2>

        <p>
          Currently pursuing my studies while improving my development
          and problem-solving skills through projects and continuous learning.
        </p>
      </section>

      {/* Skills */}
      <section className="about-card">
        <h2>Skills</h2>

        <div className="skills-box">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>Git & GitHub</span>
          <span>SQL</span>
        </div>
      </section>

      {/* Career Goal */}
      <section className="about-card">
        <h2>Career Goal</h2>

        <p>
          Seeking opportunities to grow as a Frontend or Full Stack Developer
          while building impactful and modern web applications.
        </p>
      </section>

      {/* Interests */}
      <section className="about-card">
        <h2>Interests</h2>

        <p>
          UI Design • Web Development • Learning React • Building Projects
        </p>
      </section>

    </div>
  );
}