import React, { useEffect } from "react";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/slices/appSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import { GET_YOUTUBE_VIDEO_BY_ID } from "../../utils/constants";
import { CommentsContainer } from "../../components/home/body/main-container/video-container/commentsContainer";
import { moveWatchedVideoToEnd } from "../../store/slices/demoVideoSlice";
const WatchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {isdemomode } = location.state || {isdemomode:false};
  const [videoIdParams] = useSearchParams();
  const videoId = videoIdParams.get("v");
  useEffect(() => {
    if(isdemomode){
       dispatch(moveWatchedVideoToEnd(videoId));
    }
    dispatch(closeMenu());
  }, []);
  return (
    <div className={styles.watchPage}>
      <div>
        <iframe
          src={GET_YOUTUBE_VIDEO_BY_ID(videoId)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
