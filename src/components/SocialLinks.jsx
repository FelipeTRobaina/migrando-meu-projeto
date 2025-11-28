import githubIcon from '../assets/desktop-logo-icon-git-hub.svg';
import instagramIcon from '../assets/desktop-logo-icon-instagram.svg';
import linkedinIcon from '../assets/desktop-logo-icon-linked-in.svg';
import youtubeIcon from '../assets/desktop-logo-icon-you-tube.svg';

function SocialLinks() {
  return (
    <div className="sociallinks">
        <a href="https://github.com/SEU-USUARIO" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://instagram.com/SEU-USUARIO" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://youtube.com/SEU-CANAL" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="YouTube" />
        </a>
        <a href="https://linkedin.com/in/SEU-PERFIL" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="LinkedIn" />
        </a>
    </div>
  );
}

export default SocialLinks;