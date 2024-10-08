import SocialMedia from "../components/SocialMedia";
import blogImg from '../images/Blog.jpeg';

// describing them as function components and not as class components as they are outdated practices
const Blog = () => {
    return (
        <>
        <p className="articleTitle">Hello! Welcome to my blog!</p>
        <img className="articleImage" src={blogImg} alt="Blog Cover" style={{ maxWidth: '100%'}} />
        <p className="justified-text">
        Hello and welcome to my corner of the internet, where technology meets curiosity! In a world that’s constantly evolving, staying on top of the latest advancements is not just an option, but a necessity. This blog is my way of diving deep into the cutting-edge trends shaping the world today, and I invite you to join me on this journey through the dynamic and fast-paced realm of technology.
        </p>
        <p className="justified-text">
        Here, I explore a variety of topics, ranging from emerging software technologies and technology trends to more specialized fields like Artificial Intelligence (AI), Machine Learning (ML), and Cybersecurity. Whether you're a developer, tech enthusiast, or someone simply curious about the forces driving our digital future, you’ll find valuable insights and discussions on how these technologies are revolutionizing industries and our daily lives.
        </p>
        <p className="justified-text">
        My fascination with technology doesn't stop at trends; I also share my personal projects, providing a behind-the-scenes look at how these ideas take shape—from conception to execution. I believe in the power of learning by doing, and through my hands-on projects, I aim to inspire you to explore, experiment, and push the boundaries of what’s possible.
        </p>
        <p className="justified-text">
        In addition to discussing my own work, I keep an eye on the latest discoveries and advancements in the tech world. Every day, new innovations emerge, challenging the status quo and opening doors to possibilities we once only imagined. From breakthroughs in quantum computing to the evolution of AI ethics, this blog is where I break down these complex ideas into digestible, thought-provoking content that sparks discussion and curiosity. 
        </p>
        <p className="justified-text">
        Technology, in its essence, is about solving problems, pushing limits, and creating opportunities. Through this blog, I aim to foster a community of learners and thinkers who are as passionate about technology as I am. Whether you’re looking to learn about a new programming framework, understand the future of AI, or stay updated on cybersecurity threats, there’s something here for you.
        </p>
        <p className="justified-text">
        So grab a cup of coffee, take a look around, and don’t hesitate to join the conversation. Let’s explore together! 
        </p>
        <h2>Featured Articles</h2>
        <h1>Content to be added soon!</h1>
        <SocialMedia/>
        </>
    );
}

export default Blog;