// src/components/Project.jsx
function Project({ title, image, deployLink, repoLink }) {
  return (
    <div className='project'>
      <h3>{title}</h3>
      <img src={image} alt={`${title} screenshot`} />
      <div>
        <a href={deployLink} target='_blank' rel='noopener noreferrer'>
          View Live
        </a>
        <a href={repoLink} target='_blank' rel='noopener noreferrer'>
          View Code
        </a>
      </div>
    </div>
  );
}

export default Project;
