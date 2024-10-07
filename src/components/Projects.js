import React from "react";
import project1 from "../images/Project1.png";
import project2 from "../images/Project2.png";
import project3 from "../images/Project3.png";
import project4 from "../images/Project4.png";

const projects = [
    {
        title: "Voice ChatGPT",
        description: "Innovative Android app integrating Speech-to-Text, and Text-to-Speech functionalities for a dynamic, speech-based conversational AI experience and leveraging OpenAI for querying and fetching results of user input.",
        image: project1,
        githubLink: "https://github.com/Ashwanth369/Voice-ChatGPT"
    },
    {
        title: "WeChat",
        description: "Interactive social chat platform using Angular for an intuitive UI, NodeJS and ExpressJS for a robust back end, and combined with MongoDB for efficient data handling and retrieval.",
        image: project2,
        githubLink: "https://github.com/RajVenkat20/WeChat" 
    },
    {
        title: "Stock Price Prediction",
        description: "Exploited historical financial data and real‐time Twitter sentiment analysis to predict stock price movements, utilized NLP and deep learning techniques to devise predictive models using LSTM, Random Forest Regressor, and Linear Regression.",
        image: project3,
        githubLink: "#" 
    },
    {
        title: "Personal Blog",
        description: "A blog application built with React that features Firebase Authentication for user login and authentication. It also integrates with Google Cloud Platform for backend services.",
        image: project4,
        githubLink: "https://github.com/RajVenkat20/blog-app"
    },
];

const Projects = () => {
    return (
        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => window.open(project.githubLink, "_blank")}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
    );
};

export default Projects;
