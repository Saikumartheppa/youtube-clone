import React, { useCallback, useEffect, useRef } from "react";
import styles from "./style.module.css";
import { fetchVideos } from "./videoService";
import { VideoCard } from "./video-card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const VideoContainer = () => {
  const dispatch = useDispatch();
  const { items, nextPageToken, hasMore, status, error } = useSelector(
    (store) => store.videos
  );
  const observer = useRef();
  const lastVideoRef = useCallback(
    (node) => {
      if (status === "loading" || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("loading next page with token : ", nextPageToken);
          dispatch(fetchVideos(nextPageToken));
        }
      });
      if (node) observer.current.observe(node);
    },
    [status, hasMore, nextPageToken]
  );
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  useEffect(() => {
    if (items.length === 0 && status === "idle") {
      console.log("Initial fetch for videos...");
      dispatch(fetchVideos());
    }
  }, [items.length, status]);

  return (
    <div
      className={`${styles.videoContainer} ${
        isMenuOpen ? styles.menuOpen : styles.menuClose
      }`}
    >
      {items.map((video, index) => {
        return index === items.length - 1 ? (
          <Link to={`/watch?v=${video.id}`} ref={lastVideoRef} key={video.id} state={{isdemomode:false}}>
            <VideoCard isMenuOpen={isMenuOpen} info={video} />
          </Link>
        ) : (
          <Link to={`/watch?v=${video.id}`} key={video.id} state={{isdemomode:false}}>
            <VideoCard isMenuOpen={isMenuOpen} info={video} />
          </Link>
        );
      })}
      {status === "loading" && (
        <div className="loader">
            <p>Loading...</p> 
        </div>
      )}
      {status === "failed" && error && (
        <div className="failed">
          <p>Error loading videos: {error}</p>
        </div>
      )}
      {!hasMore && items.length > 0 && status !== "loading" && (
        <div className="reachedEnd">
          <p>You've reached the end of the videos!</p>
        </div>
      )}
      {items.length === 0 && status === "succeeded" && !hasMore && (
        <div className="NoVideosFound">
          <p>No videos found.</p>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
