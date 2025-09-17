import React from "react";
import styles from "./style.module.css";
import { MenuItems } from "./menu-items";
import { useLocation } from "react-router-dom";
const SideBar = () => {
  const location = useLocation();
  if (location.pathname === "/watch") {
    return null;
  }
  return (
    <div className={styles.sideBar}>
      <MenuItems />
    </div>
  );
};

export default SideBar;
