import React, { useEffect } from 'react'
import styles from "./style.module.css";
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../store/slices/appSlice';
const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(closeMenu());
    },[])
  return (
    <div>WatchPage;</div>
  )
}

export default WatchPage;