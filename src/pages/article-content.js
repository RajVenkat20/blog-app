import sysDesign from '../images/articles/SystemsDesign.png';
import mongoDB from '../images/articles/MongoDB.png';
import nodeServer from '../images/articles/NodeServer.jpg';

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
        image: nodeServer,
        altText: 'NodeJS Server'
    },     {
        name: 'mongodb',
        publishedOn: "10/8/2024 1:30PM EST",
        title: 'Why MongoDB is My Go-To NoSQL Database',
        content: [
            <p class="justified-text">When I first encountered MongoDB, I was struck by how different it was from traditional relational databases like MySQL or PostgreSQL. It was fast, flexible, and designed to scale easily. Since then, MongoDB has become one of my go-to databases for modern applications, especially when working with unstructured or semi-structured data.</p>,
            <h2>What is MongoDB?</h2>,
            <p class="justified-text">MongoDB is a NoSQL, document-oriented database. Unlike relational databases that use tables and rows, MongoDB stores data in JSON-like documents, which gives it a more flexible and dynamic schema. This schema flexibility allows for easier adaptation to changes in requirements without the need for complex database migrations.</p>,
            <p class="justified-text">At its core, MongoDB offers horizontal scalability, high availability, and performance, making it a great choice for applications that handle large volumes of data or need to scale quickly.</p>,
            <h2>Why MongoDB Stands Out</h2>,
            <h4>1. Schema Flexibility</h4>,
            <p className='justified-text'>One of the biggest strengths of MongoDB is its flexible schema. In traditional SQL databases, you need to define a rigid schema before adding any data. With MongoDB, you can insert documents that may have different fields, allowing for rapid development and iteration. This flexibility makes it ideal for projects where the data model is expected to evolve over time.
            </p>,
            <p className='justified-text'>For example, in an e-commerce app, product information can vary widely across categories (electronics, clothing, books), and MongoDB’s document model accommodates this variability without requiring schema adjustments.</p>,
            <h4>2. Horizontal Scalability</h4>,
            <p className='justified-text'>MongoDB excels at scaling horizontally, meaning that you can distribute data across multiple servers (sharding) rather than relying on a single machine. This makes it a great fit for distributed systems and applications that expect to handle massive amounts of data or traffic.</p>,
            <p className='justified-text'>With automatic sharding, MongoDB distributes the data across multiple servers and balances the load, so your application can continue running smoothly as it scales.</p>,
            <h4>3. Document-Oriented Data Model</h4>,
            <p className='justified-text'>The document-oriented data model is what makes MongoDB unique. Each document is stored as BSON (Binary JSON), which supports rich data types like arrays and nested objects. This allows developers to store complex hierarchical data structures naturally in a single record.
            </p>,
            <p className='justified-text'>For example, storing a user’s profile in MongoDB can include their basic information, a list of their recent activities, and even nested documents like their payment methods—all in one place.</p>,
            <h4>4. Performance</h4>,
            <p className='justified-text'>MongoDB’s performance is impressive when it comes to handling large-scale read and write operations. The document model allows for quick reads and writes because all relevant data is typically stored in a single document, reducing the need for complex JOIN operations as in relational databases. MongoDB’s indexing mechanisms, including compound and geospatial indexes, further boost query performance.</p>,
            <h2>5. High Availability</h2>,
            <p className='justified-text'>MongoDB’s built-in replication is another key feature that ensures high availability. Replica sets allow you to automatically synchronize data across multiple nodes, so if one node fails, another one can take over seamlessly. This redundancy is crucial for ensuring that your data is always available, even in the event of hardware failures.</p>,
            <h2>Common Use Cases for MongoDB</h2>,
            <p className='justified-text'>MongoDB shines in scenarios where flexibility, scalability, and high performance are crucial. Here are some common use cases where MongoDB excels:</p>,
            <ul>
                <li className='justified-text'><b>Real-Time Analytics</b>: MongoDB is often used for real-time analytics applications that require fast, high-volume reads and writes. Its schema flexibility makes it a good choice for analytics platforms where data structures might change over time.</li>
                <li className='justified-text'><b>Content Management Systems</b>: CMS platforms often need to handle a wide range of content types, and MongoDB’s flexible document model makes it easy to store various types of media, metadata, and relationships without strict schema enforcement.</li>
                <li className='justified-text'><b>IoT Applications</b>: With the rise of IoT, devices generate massive amounts of unstructured data. MongoDB’s scalability and schema flexibility allow it to handle this influx of data and store it in a way that’s easy to query and analyze.</li>
                <li className='justified-text'><b>E-commerce Platforms</b>: E-commerce systems deal with various data types—user profiles, product catalogs, orders, and reviews. MongoDB’s ability to scale horizontally and support diverse data structures makes it a natural fit.</li>
            </ul>,
            <h2>My Experience with MongoDB</h2>,
            <p className='justified-text'>When I first started using MongoDB, I was impressed by how easy it was to get up and running. I appreciated the simplicity of storing and retrieving JSON-like documents without worrying about defining complex table structures upfront. MongoDB’s aggregation framework also stood out for me. With its ability to perform complex data processing and transformation in the database, I could write concise queries that would otherwise require extensive code or multiple steps in relational databases.</p>,
            <p className='justified-text'>I’ve used MongoDB in a variety of projects, from building small-scale applications to working with large-scale systems that required sharding across multiple servers. The ability to scale horizontally and handle high write loads has been invaluable, especially in distributed environments. It’s especially handy for situations where the data model is fluid and likely to change as the project evolves.</p>,
            <h2>Downsides of MongoDB</h2>,
            <p className='justified-text'>No technology is without its downsides, and MongoDB is no exception. Some potential challenges include:</p>,
            <ul>
                <li className='justified-text'><b>Data Consistency</b>: MongoDB uses eventual consistency in certain configurations (e.g., sharded clusters), which might not be ideal for applications that require strict consistency guarantees.</li>
                <li className='justified-text'><b>Lack of Transactions in Early Versions</b>: Earlier versions of MongoDB lacked multi-document ACID transactions, though this has been addressed in recent versions. If your application requires complex transactions, you’ll need to ensure you’re using an updated version.</li>
                <li className='justified-text'><b>Memory Usage</b>: MongoDB’s in-memory model can consume a significant amount of memory, which might require careful planning around indexes and memory management to avoid performance bottlenecks.</li>
            </ul>,
            <h2>Conclusion</h2>,
            <p className='justified-text'>MongoDB has become a go-to solution for me because of its flexibility, performance, and ability to scale. While it might not be the right fit for every project, it’s particularly suited to applications with dynamic data models or those that need to handle large amounts of unstructured data.</p>,
            <p className='justified-text'>For any software engineer working in modern tech stacks, MongoDB is a tool worth mastering. Its document model aligns well with how we often think about objects in code, and its scalability means it can grow alongside your application. Whether you're building a content-rich application or an analytics platform, MongoDB offers a solid foundation for both rapid development and long-term scalability.</p>
        ],
        image: mongoDB,
        altText: 'MongoDB'
    },  
];

export default articles;