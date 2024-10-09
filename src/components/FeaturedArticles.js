import sysDesign from '../images/articles/SystemsDesign.png';
import mongoDB from '../images/articles/MongoDB.png';
import { useNavigate } from 'react-router-dom';

const FeaturedArticles = () => {
    const navigate = useNavigate(); 

    return (
      <>
        <div className="featured-articles-section" onClick={() => {
                            navigate('/articles/learn-react');
                        }}>
          <div className="featured-articles-left-column">
            <p>
            <img title="Java" alt="Java" className="featured-image" src={sysDesign} />
            </p>
          </div>
          <div className="featured-articles-right-column">
            <span id="featured-article-type">ARTICLE</span>
            <br/>
            <span id="featured-article-title">System Design 101</span>
          </div>
        </div>
        <hr/>
        <div className="featured-articles-section" onClick={() => {
                            navigate('/articles/mongodb');
                        }}>
          <div className="column featured-articles-left-column">
            <p>
            <img title="Java" alt="Java" className="featured-image" src={mongoDB} />
            </p>
          </div>
          <div className="column featured-articles-right-column">
            <span id="featured-article-type">ARTICLE</span>
            <br/>
            <span id="featured-article-title">Why MongoDB is My Go-To NoSQL Database</span>
          </div>
        </div>
      </>
    );
};

export default FeaturedArticles;