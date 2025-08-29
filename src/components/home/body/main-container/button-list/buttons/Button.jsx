import React from 'react'
import styles from "./style.module.css";
const Button = ({title}) => {
  return (
    <div className= {styles.button}>{title}</div>
  )
}
export default Button;