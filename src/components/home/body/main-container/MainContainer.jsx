import React from "react";
import { ButtonList } from "./button-list";
import styles from "./style.module.css";
import { VideoContainer } from "./video-container";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className= {`${styles.mainContainer} ${!isMenuOpen ? styles.menuOpen : styles.menuClose}`}>
      <ButtonList/>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
