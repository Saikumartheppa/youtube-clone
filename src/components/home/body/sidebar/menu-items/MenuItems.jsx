import React from "react";
import styles from "./style.module.css";
import DefaultItems from "./default-items/DefaultItems";
import ListItems from "./list-items/ListItems.jsx";
import { useSelector } from "react-redux";
const MenuItems = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen ? (
    <div className={styles.showScrollBar}>
      <ListItems />
    </div>
  ) : (
    <div className={styles.hideScrollBar}>
      <DefaultItems />
    </div>
  );
};

export default MenuItems;
