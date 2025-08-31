import React from 'react'
import styles from "./style.module.css";
import { MainContainer } from './main-container';
import { SideBar } from './sidebar';
import { Outlet } from 'react-router-dom';
const Body = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body;