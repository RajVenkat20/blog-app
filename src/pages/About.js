import SocialMedia from "../components/SocialMedia";

// describing them as function components and not as class components as they are outdated practices
const About = () => (
    <>
    <h1>About Me</h1>
    <p className="justified-text">
        Welcome to my blog! I'm Raj Venkat Reddy Mavuram and I'm a Computer Science graduate student at Purdue University - West Lafayette. My journey in software development began with a solid foundation in various programming languages and technologies, and I have since developed a passion for building robust, scalable solutions.
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
    <SocialMedia />
    </>
);

export default About;