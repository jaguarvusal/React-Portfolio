import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import "../style/style.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/jaguarvusal" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/vusal-shahverdiyev" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
