import React from "react";
import { ButtonList } from "./button-list";
import styles from "./style.module.css";
import { VideoContainer } from "./video-container";
const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
