// Project.jsx
import PropTypes from 'prop-types';

function Project({ title, image, deployLink, repoLink }) {
  return (
    <div className='project'>
      <h3>{title}</h3>
      <img src={image} alt={`${title} screenshot`} />
      <div>
        <a href={deployLink} target='_blank' rel='noopener noreferrer'>
          <button type='button'>View Live</button>
        </a>
        <a href={repoLink} target='_blank' rel='noopener noreferrer'>
          <button type='button'>View Code</button>
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;
