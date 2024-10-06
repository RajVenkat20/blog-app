import SocialMedia from "../components/SocialMedia";
import Education from "../components/Education";
import Experience from "../components/Experience";
import profilePic from "../images/Raj.jpg";
import { useNavigate } from "react-router-dom";

// describing them as function components and not as class components as they are outdated practices
const About = () => {
    const navigate = useNavigate();

    // Function to view the resume when "View Resume" is clicked
    const viewResume = () => {
        window.open('https://drive.google.com/file/d/1QOnITkgKG1kkJeYL67G-nFPiC3UcO-8s/view?usp=drive_link', '_blank');
    }

    return(
        <>
        <div className="bio-img-container">
            <img src={profilePic} alt="Raj Venkat Reddy Mavuram" className="profile-pic" />
            <p>Hello! I'm <b> Raj Venkat Reddy Mavuram</b>.</p>
        </div>
        <p className="justified-text">
            I'm a Computer Science graduate student at Purdue University - West Lafayette. My journey in software development began with a solid foundation in various programming languages and technologies, and I have since developed a passion for building robust, scalable solutions.
        </p>
        <p className="justified-text">
            Before starting my master’s program, I worked as a Software Engineer at Oracle India, where I was part of the team responsible for developing Oracle’s leading hospitality product, OPERA Cloud. During my time there, I contributed to various front-end and back-end projects, led UI development workflows, and improved the performance of critical APIs. One of the highlights of my career was working on a loyalty-based subscription service, which significantly boosted customer engagement.
        </p>
        <p className="justified-text">
            At Purdue, I have expanded my skills by taking courses in Machine Learning, Information Security, AI, and Database Systems, and by working as a Web Developer for the School of Languages and Cultures. I’ve also engaged in several personal projects, including developing a Voice ChatGPT app and a stock price prediction model using Machine Learning techniques.
        </p>
        <p className="justified-text">
            I am passionate about creating innovative solutions and learning the latest advancements in AI and software engineering. In my spare time, I enjoy working on side projects that push my limits, such as developing AI-driven applications and exploring new frameworks.
        </p>
        <div className="btn-container">
            <button className="btnAnimation about-buttons" onClick={() => {
                navigate('/');
            }}>Visit Blog</button>
            <button className="btnAnimation about-buttons" onClick={viewResume}>View Resume</button>
        </div>  
        <hr className="interSectionHr"/>
        <h2 className="sectionName">EDUCATION</h2>
        <Education 
                  degree="Master of Science in Computer Science"
                  university="Purdue University"
                  yearRange="Jan 2023 - Dec 2024"
                  coursework="Algorithm Design, Analysis, and Implementation, Data Communication and Computer Networks, Machine Learning, Information Security, Database Systems, Cryptography, Artificial Intelligence, Compiling and Programming Systems, AI and Security, Reasoning with LLMs."/>
        <Education 
                  degree="Bachelor of Engineering in Computer Science"
                  university="Vasavi College of Engineering"
                  yearRange="Jul 2017 - Aug 2021"
                  coursework="Design and Analysis of Algorithms, Distributed Systems and Cloud Computing, Artificial Intelligence, Machine Learning, Computer Networks, Information Security, OOPS, Discrete Mathematics, Data Structures and Algorithms, Operating Systems, Computer Architecture, Databases."/>          
        <hr className="interSectionHr"/>
        <h2 className="sectionName">WORK EXPERIENCE</h2>
        <Experience/>
        <SocialMedia />
        </>
    );
};

export default About;