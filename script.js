function showSection(sectionId) {

  const sections = document.querySelectorAll('.section-box');

  sections.forEach(section => {
    section.style.display = 'none';
  });

  document.getElementById(sectionId).style.display = 'block';
}

function toggleProject(projectId) {

  const project = document.getElementById(projectId);

  if (project.style.display === "block") {
    project.style.display = "none";
  } else {
    project.style.display = "block";
  }
}