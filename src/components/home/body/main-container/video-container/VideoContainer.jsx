import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { fetchVideos } from "./videoService";
import { VideoCard } from "./video-card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const videoResults = await fetchVideos();
    setVideos(videoResults);
  };
  return (
    <div className={`${styles.videoContainer} ${isMenuOpen ? styles.menuOpen : styles.menuClose}`}>
      {videos.map((video) => (
       <Link to={`/watch?v=${video.id}`} key={video.id}> <VideoCard isMenuOpen={isMenuOpen} info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
