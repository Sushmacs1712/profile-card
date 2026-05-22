import { useState } from "react";
import "../style/Skills.css";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(
    "Programming Languages"
  );

  const skillsData = {
    "Programming Languages": ["C", "Java", "Python", "SQL"],

    "Technologies & Frameworks": [
      "HTML5",
      "CSS3",
      "React.js",
      "Bootstrap",
    ],

    Tools: ["GitHub", "VS Code", "Eclipse", "MySQL", "Git"],

    Concepts: [
      "Data Structures",
      "OOPs",
      "Responsive Web Design",
      "REST APIs",
    ],
  };

  return (
    <div className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-buttons">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`skill-btn ${
              selectedSkill === category ? "active-btn" : ""
            }`}
            onClick={() => setSelectedSkill(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-display-card">
        <h3>{selectedSkill}</h3>

        <div className="skill-tags">
          {skillsData[selectedSkill].map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;