// src/components/Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '../index.css';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <ul className='social-icons'>
        <li>
          <a
            href='https://github.com/badrulborhanudin'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/badrul-b-2968402b2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
