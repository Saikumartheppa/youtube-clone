import React, { useEffect } from "react";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import { GET_YOUTUBE_VIDEO_BY_ID } from "../../utils/constants";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [videoIdParams] = useSearchParams();
  const videoId = videoIdParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <iframe
        width="800"
        height="450"
        src={GET_YOUTUBE_VIDEO_BY_ID(videoId)}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
