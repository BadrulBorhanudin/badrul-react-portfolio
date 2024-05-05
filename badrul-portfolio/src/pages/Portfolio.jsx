// src/pages/Portfolio.jsx
import Project from '../components/Project';

const projects = [
  {
    title: 'Password Generator',
    image: './src/assets/images/weekly-challenges-1.png',
    deployLink: 'https://badrulborhanudin.github.io/password-generator/',
    repoLink: 'https://github.com/badrulborhanudin/password-generator',
  },
  {
    title: 'Coding Quiz App',
    image: './src/assets/images/weekly-challenges-2.png',
    deployLink: 'https://badrulborhanudin.github.io/coding-quiz-app/',
    repoLink: 'https://github.com/BadrulBorhanudin/coding-quiz-app',
  },
  {
    title: 'Work Day Scheduler',
    image: './src/assets/images/weekly-challenges-3.png',
    deployLink: 'https://badrulborhanudin.github.io/weather-dashboard/',
    repoLink: 'https://github.com/BadrulBorhanudin/weather-dashboard',
  },
  {
    title: 'Weather Dashboard',
    image: './src/assets/images/weekly-challenges-4.png',
    deployLink: 'https://badrulborhanudin.github.io/work-day-scheduler/',
    repoLink: 'https://github.com/badrulborhanudin/work-day-scheduler',
  },
  {
    title: 'Route Optimisation Tool',
    image: './src/assets/images/group-project-1.png',
    deployLink: 'https://BadrulBorhanudin.github.io/AsTheCrowDrives',
    repoLink: 'https://github.com/BadrulBorhanudin/AsTheCrowDrives',
  },
];

function Portfolio() {
  return (
    <section>
      <h2>Projects</h2>
      <div className='project-list'>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployLink={project.deployLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
