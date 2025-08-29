import React from 'react'
import styles from "./style.module.css";
import { MenuItems} from "./menu-items";
const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <MenuItems />
    </div>
  )
}

export default SideBar;