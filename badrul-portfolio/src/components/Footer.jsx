// src/components/Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

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
            href='https://linkedin.com/in/your-profile'
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
