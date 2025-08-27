import React from 'react'
import styles from "./style.module.css";
import { MainContainer } from './main-container';
import { SideBar } from './sidebar';
const Body = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <MainContainer />
    </div>
  )
}

export default Body;