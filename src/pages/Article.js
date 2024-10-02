/* useEffect - React hook used for writing logic into the components that will be executed 
               outside the normal component rendering (ex: loading data from the server)
   useState - React hook used to add state to the function components
*/
import { useState, useEffect } from "react";                 
import { useParams } from "react-router-dom";     // React hook
import axios from 'axios';
import NotFound from "./NotFound";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from '../hooks/useUser';
import articles from "./article-content";

// describing them as function components and not as class components as they are outdated practices
const Article = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: []});    // Using default values in case the server responds nothing
    const { articleId } = useParams();

    const { user, isLoading } = useUser();
        
    /* By using the second arg '[]' in useEffect, we are basically want it to call this callback function only
       when the value inside the array changes
    */
    useEffect(() => {
      /* Since we can't use 'async' keyword for the function in useEffect, we create an internal async function 
         inside it and place our data fetch from server code inside it
      */
      const loadArticleInfo = async () => {
        // Use the axios.get function to make a get request to the server endpoint
        const response = await axios.get(`/api/articles/${articleId}`);
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
      }

      loadArticleInfo();      
    }, []); 

    const article = articles.find(article => article.name === articleId);   

    // A function that makes a request to the server telling it that we want to upvote an article
    const addUpvote = async () => {
      const response = await axios.put(`/api/articles/${articleId}/upvote`);
      const updatedArticle = response.data;
      setArticleInfo(updatedArticle);
    }

    // In case there is no article found, we handle it properly
    if( !article ) {
      return <NotFound/>
    }

    return (
      // Wrapping inside a React fragment so that we can return multiple elements
      <>
        <h1>{article.title}</h1>
        <div className="upvotes-section">
          {user 
              ? <button onClick={addUpvote}>UpVote</button>
              : <button>Log in to upvote</button>}
          <br></br>
        </div>
        <div>
          <p>This article has {articleInfo.upvotes} upvote(s)</p>
        </div>
        {article.content.map((paragraph, i) => (
          <p className="justified-text" key={i}>{paragraph}</p>
        ))}
        {user
            ? <AddCommentForm
            articleName={articleId}
            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            : <button>Log in to add a comment</button>}
        <CommentsList comments={articleInfo.comments} />
      </>
    );
}

export default Article;