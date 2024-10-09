import { Link } from "react-router-dom";
import sysDesign from "../images/articles/SystemsDesign.png";

// Accepting 'articles' as a property to ArticlesListComponent
const ArticlesListComponent = ({ articles }) => {
  return (
    // Wrapping inside a React fragment so that we can return multiple elements
    <>
      {articles.map((article) => (
        <>
          <Link
            className="featured-articles-section"
            key={article.name}
            to={`/articles/${article.name}`}
          >
            <div className="featured-articles-left-column">
              <p>
                <img
                  title="Java"
                  alt="Java"
                  className="featured-image"
                  src={article.image}
                />
              </p>
            </div>
            <div className="featured-articles-right-column">
              <span id="featured-article-type">ARTICLE</span>
              <br />
              <span id="featured-article-title">{article.title}</span>
            </div>
          </Link>
          <hr />
        </>
      ))}
    </>
  );
};

export default ArticlesListComponent;
