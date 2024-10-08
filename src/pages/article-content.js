import sysDesign from '../images/articles/SystemsDesign.png';

const articles = [
    {
        name: 'learn-react',
        publishedOn: "10/8/2024 1:30PM EST",
        title: 'Systems Design 101',
        content: [
            <p className='justified-text'>As a software engineer, I've come to realize that systems design is not just about drawing diagrams or throwing together a bunch of APIs. It's an art form—a delicate balance between functionality, scalability, and efficiency. Whether you're building a microservice architecture or designing a distributed system, the goal is to create something that's robust yet flexible enough to grow with your business needs.</p>,
            <h2>What is systems Design?</h2>,
            <p className='justified-text'>At its core, systems design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. The challenge lies in building systems that not only solve immediate problems but also anticipate future needs. It’s a blueprint for how your product or service will work in the real world.</p>,
            <h2>Key Concepts in Systems Design</h2>,
            <h4>1. Scalability</h4>,
            <p className='justified-text'>Scalability is about ensuring your system can handle growth—be it user traffic, data volume, or functionality. Designing for scalability requires forward-thinking. It's about building systems that can scale both vertically (by upgrading existing hardware) and horizontally (by adding more machines). Cloud platforms like AWS, Azure, and Google Cloud have made scaling more accessible, but the underlying architecture still needs careful planning.</p>,
            <h4>2. Availability and Redundancy</h4>,
            <p className='justified-text'>Availability refers to the system's ability to be up and running without interruptions. High availability is crucial for services like e-commerce platforms, banking systems, or streaming services. You don’t want your system to crash when users need it most. This often means designing redundancy into the system—having backup components like database replicas or failover servers to ensure continuity.</p>,
            <h4>3. Consistency vs Availability (CAP Theorem)</h4>,
            <p className='justified-text'>When designing distributed systems, you often have to balance consistency and availability, especially under network partitioning. The CAP theorem states that you can only have two out of the three. Understanding the trade-offs is critical when deciding which to prioritize. For example, financial applications often prioritize consistency, while social media platforms might prioritize availability to handle high traffic.</p>,
            <h4>4. Latency</h4>,
            <p className='justified-text'>Latency, or the delay before a transfer of data begins, can be a dealbreaker for user experience. When users expect near-instant responses, especially in real-time applications like gaming or video conferencing, latency optimization becomes crucial. Distributed caching, edge computing, and content delivery networks (CDNs) are some strategies that can help reduce latency.</p>,
            <h4>5. Security</h4>,
            <p className='justified-text'>Security isn’t just a checkbox—it’s a critical element in systems design. You have to think about authentication, authorization, encryption, and data privacy from day one. Failure to address security can lead to disastrous consequences, from data breaches to system downtimes.</p>,
            <h2>Common Pitfalls in Systems Design</h2>,
            <h4>Overengineering</h4>,
            <p className='justified-text'>It’s tempting to build the “perfect” system, but sometimes we overcomplicate the design by adding unnecessary features. Overengineering leads to increased costs, complexity, and time delays. A better approach is to start with a Minimum Viable Product (MVP), then iterate based on user feedback.</p>,
            <h4>Ignoring Future Growth</h4>,
            <p className='justified-text'>Another common mistake is designing for current needs without anticipating future growth. A system that works for 100 users might crumble under the load of 1,000 or 10,000 users. Scalability should be baked into the design from the beginning, even if you don’t expect immediate exponential growth.</p>,
            <h4>Single Points of Failure</h4>,
            <p className='justified-text'>Relying on a single database or server can create a single point of failure that could bring down the entire system. It’s crucial to design for fault tolerance by introducing redundancy, load balancing, and failover mechanisms.</p>,
            <h2>Conclusion</h2>,
            <p className='justified-text'>In my experience, the best systems are those that are built with future growth in mind, but with enough flexibility to pivot when necessary. After all, systems design is about solving today's problems while preparing for tomorrow's challenges.</p>,
            <p className='justified-text'>In my experience, the best systems are those that are built with future growth in mind, but with enough flexibility to pivot when necessary. After all, systems design is about solving today's problems while preparing for tomorrow's challenges.</p>,
            <h2>References</h2>,
            <ul><li><a href="https://www.geeksforgeeks.org/what-is-system-design-learn-system-design/">GeeksforGeeks</a></li>
            <li>You can download my notes here by clicking <a href="https://drive.google.com/drive/folders/10xd68zh_iBnERscXdT3EmPf7bFR0MKHV?usp=drive_link">here</a> </li></ul>

        ],
        image: sysDesign,
        altText: 'sysDesign'
    },    {
        name: 'learn-node',
        publishedOn: "10/8/2024 1:30PM EST",
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `In this article, we're going to be talking looking at a very quick way
            to set up a Node.js server. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ],
        image: '',
        altText: 'sysDesign'
    },     {
        name: 'mongodb',
        publishedOn: "10/8/2024 1:30PM EST",
        title: 'Learn MongoDB',
        content: [
            `Today is the day I talk about something which scares most people: resumes.
            In reality, I'm not sure why people have such a hard time with proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ],
        image: '',
        altText: 'sysDesign'
    },  
];

export default articles;