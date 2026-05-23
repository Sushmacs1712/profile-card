import React, { useState } from 'react';
import "../style/Projects.css";

const projectData = [
  {
    id: 1,
    title: 'Diabetes Diagnosis',
    description:
      'A Machine Learning–based prediction system designed to analyze user health data and identify the likelihood of diabetes using predictive modeling techniques. The project focuses on accurate health prediction, data analysis, and providing a simple user-friendly interface for instant prediction results.',
    tech: 'React, CSS, Node.js',
    github: 'https://github.com/your-link',
    live: 'https://your-live-link.com',
  },

  {
    id: 2,
    title: 'Decor Delights',
    description:
      'A modern Home Decor web application developed to showcase and manage decorative products with a responsive and visually appealing user interface. The project focuses on seamless user experience, dynamic product management, and efficient database integration using React JS and MongoDB.',
    tech: 'React, MongoDB, Express',
    github: 'https://github.com/your-link',
    live: 'https://your-live-link.com',
  },

  {
    id: 3,
    title: 'Budget Armor',
    description:
      'A personal finance management application designed to help users efficiently track income, expenses, and budget planning. The project focuses on financial organization, accurate expense analysis, and interactive user experience using React JS and Django.',
    tech: 'HTML, CSS, JavaScript',
    github: 'https://github.com/your-link',
    live: 'https://your-live-link.com',
  },
];

function Projects() {

  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (

    <div className="projects-container" id="projects">

      <h1 className="projects-heading">My Projects</h1>

      <div className="projects-wrapper">

        {projectData.map((project) => (

          <div className="project-card" key={project.id}>

            <div
              className="project-title"
              onClick={() => toggleProject(project.id)}
            >

              <h2>{project.title}</h2>

              <span>
                {activeProject === project.id ? '−' : '+'}
              </span>

            </div>

            {activeProject === project.id && (

              <div className="project-content">

                <p>{project.description}</p>

                <div className="tech-stack">
                  <strong>Tech Stack:</strong> {project.tech}
                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>

  );
}

export default Projects;