import { Link } from 'react-router-dom';

// Accepting 'articles' as a property to ArticlesListComponent
const ArticlesListComponent = ({ articles }) => {
    return (
        // Wrapping inside a React fragment so that we can return multiple elements
        <>
        {articles.map((article) => (
            <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
          ))}
        </>
    );
}

export default ArticlesListComponent;