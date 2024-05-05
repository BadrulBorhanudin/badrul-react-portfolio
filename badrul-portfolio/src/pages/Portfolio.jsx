// src/pages/Portfolio.jsx
import Project from '../components/Project';

const projects = [
  {
    title: 'Project One',
    image: '/images/project1.png',
    deployLink: 'https://your-project-one.netlify.app',
    repoLink: 'https://github.com/your-username/project-one',
  },
  // Add more projects here
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
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
