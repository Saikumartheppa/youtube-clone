import React from "react";
import styles from "./style.module.css";
import { Button } from "./buttons";
import { buttonsList } from "../../../../../utils/constants";
import Carousel from "../corousel/Carousel";
const ButtonsList = () => {
  return (
    <div className={styles.buttonsList}>
      <Carousel>
        {buttonsList.map((button, index) => (
          <Button key={index} title={button} />
        ))}
      </Carousel>
    </div>
  );
};

export default ButtonsList;
