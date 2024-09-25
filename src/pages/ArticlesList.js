import articles from './article-content';
import ArticlesListComponent from '../components/ArticlesListComponent';

// describing them as function components and not as class components as they are outdated practices
const ArticlesList = () => {
    return (
    // Wrapping inside a React fragment so that we can return multiple elements  
      <>
        <h1>Articles</h1>
        <ArticlesListComponent articles={articles}/>
      </>
    );
}

export default ArticlesList;