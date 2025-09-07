import React from 'react'
import styles from "./style.module.css"
import CommentsList from './CommentList';
import { commentsData } from "../../../../../../utils/constants";
const CommentsContainer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;