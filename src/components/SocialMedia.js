import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord, faHackerrank, faXTwitter } from '@fortawesome/free-brands-svg-icons';
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
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" title="LinkedIn Profile"/>
          </a>
          <a
            href="https://github.com/RajVenkat20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon github" title="GitHub Profile"/>
          </a>
          <a href="mailto:mrajvenkatreddy@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon mail" title="Email"/>
          </a>
          <a
            href="https://discordapp.com/users/773043180295815168"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} className="icon discord" title="Discord Profile"/>
          </a>
          <a
            href="https://x.com/mrajvenkatreddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} className="icon twitter" title="Twitter Profile"/>
          </a>
        </div>
    </footer>
  );
};

export default SocialMedia;
