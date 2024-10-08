import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faJava,
  faLinkedin,
  faGithub,
  faDiscord,
  faHackerrank,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <>
      <div className="skillsSection">
        <div className="column skills-left-column">
          <p>
            <b>Languages</b>
          </p>
        </div>
        <div className="column skills-right-column">
        
        <img title="Java" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
        
        <img title="Python" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          
        <img title="JavaScript" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          
        <img title="C++" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
        
        <img title="PHP" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
        
        <img title="C" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
        </div>
      </div>
      <div className="skillsSection">
        <div className="column skills-left-column">
          <p>
            <b>Libraries and Frameworks</b>
          </p>
        </div>
        <div className="column skills-right-column">
            <img title="Angular" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" />
            
            <img title="React" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            
            <img title="Axios" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" />
            
            <img title="Spring" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
            
            <img title="Pandas" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
            
            <img title="Numpy" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />
            
            <img title="PyTorch" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />
            
            <img title="Amazon AWS" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                           
        </div>
      </div>
      <div className="skillsSection">
        <div className="column skills-left-column">
          <p>
            <b>Tools</b>
          </p>
        </div>
        <div className="column skills-right-column">         
            
        <img title="Docker" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />

        <img title="Postman" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
        
        <img title="Jira" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
        
        <img title="Git" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
        
        <img title="VSCode" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
        
        <img title="Kubernetes" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" />

        <img title="SQLDeveloper" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" />
        
        <img title="Jenkins" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" />

        <img title="SonarQube" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg" />
        
        <img title="Jupyter" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" />
          
                
            
        </div>
      </div>
      <div className="skillsSection">
        <div className="column skills-left-column">
          <p>
            <b>Databases</b>
          </p>
        </div>
        <div className="column skills-right-column">
        <img title="OracleDB" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" />
        <img title="MongoDB" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
        <img title="MySQL" className="skillsIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />    
        
          
            
        </div>
      </div>
    </>
  );
};

export default Skills;
