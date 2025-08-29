import React from "react";
import styles from "./style.module.css";
import { Button } from "./buttons";
import { buttonsList } from "../../../../../utils/constants";
const ButtonsList = () => {
  return (
    <div className={styles.buttonsList}>
      {buttonsList.map((button, index) => (
        <Button key={index} title={button} />
      ))}
    </div>
  );
};

export default ButtonsList;
