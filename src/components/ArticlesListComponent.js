import { Link } from 'react-router-dom';

// Accepting 'articles' as a property to ArticlesListComponent
const ArticlesListComponent = ({ articles }) => {
    return (
        // Wrapping inside a React fragment so that we can return multiple elements
        <>
        {articles.map((article) => (
            <>
              <div className="articles">
              <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                {/* <p className='justified-text'>{article.beginning[1]}...</p> */}
              </Link>
              </div>
              <hr></hr>
            </>
          ))}
        </>
    );
}

export default ArticlesListComponent;