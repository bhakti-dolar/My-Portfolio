// Dynamic Skills
const skills = ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Java', 'C','C++'];
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
  const li = document.createElement('li');
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Dynamic Projects
const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A responsive portfolio website using HTML, CSS & JS.',

  },
  {
    title: 'Weather App',
    description: 'Weather forecast app using OpenWeatherMap API.',
   
  },
  {
    title: 'To-Do List',
    description: 'Task management app with localStorage support.',
   
  }
];

const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  projectsContainer.appendChild(card);
});
