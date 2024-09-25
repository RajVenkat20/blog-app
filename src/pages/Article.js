import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import articles from "./article-content";

// describing them as function components and not as class components as they are outdated practices
const Article = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    // In case there is no article found, we handle it properly
    if( !article ) {
      return <NotFound/>
    }

    return (
      // Wrapping inside a React fragment so that we can return multiple elements
      <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </>
    );
}

export default Article;