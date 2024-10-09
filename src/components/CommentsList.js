// The component takes in a single property called 'comments'
import useUser from "../hooks/useUser";

const CommentsList = ({ comments }) => {
  const { user } = useUser();

  return (
    <>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <div className="comment" key={comment.postedBy + ": " + comment.text}>
          <h4>Posted by: <span>{comment.postedBy}</span></h4>
          <p>{comment.text}</p>
        </div>
      ))}
      <br/>
    </>
  );
};

export default CommentsList;