import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faDiscord, faHackerrank, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const SocialMedia = () => {
  return (
    <footer>
        <div className="made-by">
            <p>Made by Raj Venkat Reddy Mavuram</p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/raj-venkat-reddy-mavuram/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          </a>
          <a
            href="https://github.com/RajVenkat20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </a>
          <a 
            href="https://www.hackerrank.com/profile/733024CSE" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faHackerrank} className="icon" />
          </a>
          <a href="mailto:mrajvenkatreddy@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon mail" />
          </a>
          <a
            href="https://discordapp.com/users/773043180295815168"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} className="icon discord" />
          </a>
          <a
            href="https://x.com/mrajvenkatreddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} className="icon twitter" />
          </a>
        </div>
    </footer>
  );
};

export default SocialMedia;
