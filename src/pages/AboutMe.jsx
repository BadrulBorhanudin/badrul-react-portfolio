// src/pages/AboutMe.jsx
import '../styles/AboutMe.css';
import profilePic from '../assets/images/profile-pic.png';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img
        src={profilePic}
        alt='Badrul Borhanudin'
        className='about-me-image'
      />
      <p>
        Hello, I'm Badrul, a coding bootcamp student from University of
        Adelaide.
      </p>
    </section>
  );
}

export default AboutMe;
