import React from "react";
import { ButtonList } from "./button-list";
import styles from "./style.module.css";
const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttons}>
        <ButtonList />
      </div>
    </div>
  );
};

export default MainContainer;
