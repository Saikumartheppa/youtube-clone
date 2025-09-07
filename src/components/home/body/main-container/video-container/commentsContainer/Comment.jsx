import { useState } from "react";
import DOWNARRAOWICON from "../../../../../../assets/downwardArrowIcon.svg";
import UPARRAOWICON from "../../../../../../assets/upwardArrowIcon.svg";
import styles from "./style.module.css";
import CommentsList from "./CommentList";
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  const [showReplies, setShowReplies] = useState(false); // State to toggle replies

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };
  return (
    <div>
      <div className={styles.commentWrapper}>
        <img
          className={styles.userAvatar}
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className={styles.commentContent}>
          <p className={styles.commentName}>{name}</p>
          <p>{text}</p>
        </div>
      </div>
      {/* Show replies button only if there are replies */}
      {replies && replies.length > 0 && (
        <button className={styles.showRepliesButton} onClick={toggleReplies}>
          <span>
            {showReplies ? <img src={DOWNARRAOWICON} alt='DOWNARRAOWICON'/> : <img src={UPARRAOWICON} alt='UPARRAOWICON'/>}
          </span>
          {`${replies.length} replies`}
        </button>
      )}

      {/* Conditionally render replies list */}
      {showReplies && replies && replies.length > 0 && (
        <div className={styles.repliesContainer}>
          <CommentsList comments={replies} />
        </div>
      )}
    </div>
  );
};
export default Comment;