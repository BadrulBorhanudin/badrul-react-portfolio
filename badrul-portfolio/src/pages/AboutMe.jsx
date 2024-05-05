// src/pages/AboutMe.jsx
import '../index.css';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img
        src='./src/assets/images/profile-pic.png'
        alt='Badrul Borhanudin'
        className='about-me-image'
      />
      <p>
        Hello, I'm Badrul, a coding bootcamp student from the University of
        Adelaide.
      </p>
    </section>
  );
}

export default AboutMe;
