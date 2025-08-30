import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { fetchVideos } from "./videoService";
import { VideoCard } from "./video-card";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const videoResults = await fetchVideos();
    setVideos(videoResults);
  };
  return (
    <div className={styles.videoContainer}>
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
