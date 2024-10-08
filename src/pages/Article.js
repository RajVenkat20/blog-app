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
import SocialMedia from "../components/SocialMedia";
import { BsHandThumbsUpFill } from "react-icons/bs";


// describing them as function components and not as class components as they are outdated practices
const Article = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false});    // Using default values in case the server responds nothing
    const { canUpvote } = articleInfo;
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
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        // Use the axios.get function to make a get request to the server endpoint
        const response = await axios.get(`/api/articles/${articleId}`, { headers });
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
      }

      if( !isLoading ) {
        loadArticleInfo();
      }      
    }, [isLoading, user, articleId]); 

    const article = articles.find(article => article.name === articleId);   

    // A function that makes a request to the server telling it that we want to upvote an article
    const addUpvote = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? { authtoken: token } : {};
      const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
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
        <p className="articleTitle">{article.title}</p>
        <div className="upvotes-section">
          {user 
              ? <button className="btnAnimation" onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already Upvoted!'}</button>
              : <button className="btnAnimation">Log in to upvote</button>}
          <br></br>

        </div>
        <div>
          <p><i>Published on: {article.publishedOn}</i></p> |
          <p className="published-upvote">This article has <i>{articleInfo.upvotes}</i> upvote(s)</p>
        </div>
        {article.image && <img className="articleImage" src={article.image} alt={article.altText} style={{ maxWidth: '100%'}} />}
        {article.content.map((paragraph, i) => (
          [paragraph]
        ))}
        {user
            ? <AddCommentForm
            articleName={articleId}
            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            : <button className="commentBtn btnAnimation">Log in to add a comment</button>}
        <CommentsList comments={articleInfo.comments} />
        <SocialMedia/>
      </>
    );
}

export default Article;