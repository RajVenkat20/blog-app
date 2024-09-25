import { useParams } from "react-router-dom";
import articles from "./article-content";

// describing them as function components and not as class components as they are outdated practices
const Article = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return (
      // Wrapping inside a React fragment so that we can return multiple elements
      <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </>
    );
}

export default Article;