import articles from './article-content';
import ArticlesListComponent from '../components/ArticlesListComponent';

// describing them as function components and not as class components as they are outdated practices
const ArticlesList = () => {
    return (
    // Wrapping inside a React fragment so that we can return multiple elements  
      <>
        <p className="articleTitle">Articles</p>
        <ArticlesListComponent articles={articles}/>
      </>
    );
}

export default ArticlesList;