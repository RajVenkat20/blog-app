import articles from './article-content';
import { Link } from 'react-router-dom';

// describing them as function components and not as class components as they are outdated practices
const ArticlesList = () => {
    return (
    // Wrapping inside a React fragment so that we can return multiple elements  
      <>
        <h1>Articles</h1>
        {articles.map((article) => (
          <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </Link>
        ))}
      </>
    );
}

export default ArticlesList;