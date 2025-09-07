import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    // It's better to generate unique IDs for keys in real applications
    // For this example, index is used as a placeholder as per your original code.
    // In a real app, use something like comment.id
    <Comment key={index} data={comment} />
  ));
};

export default CommentsList;