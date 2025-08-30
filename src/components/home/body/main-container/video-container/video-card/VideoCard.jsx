import React from "react";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import useChannelInfo from "../../../../../../hooks/useChannelInfo";
import MEMU_ICON from "../../../../../../assets/menuOptionsIcon.svg";
import CHANNEL_RIGHT_ICON from "../../../../../../assets/channelRightIcon.svg";
const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle, channelId } = snippet;

  const channelInfo = useChannelInfo(channelId);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.thumbnailIconContainer}>
        <img src={thumbnails?.maxres?.url} alt="Thumbnail" />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.channelProfile}>
          <img
            src={channelInfo?.snippet?.thumbnails?.medium?.url}
            alt="Channel_Profile"
          />
        </div>
        <div className={styles.videoInfo}>{title}</div>
        <div className={styles.menuIconContainer}>
          <img src={MEMU_ICON} alt="MEMU_ICON" />
        </div>
      </div>
      <div>
        <div className={styles.channelTitle}>
          <h2>{channelTitle}</h2>
          <img src={CHANNEL_RIGHT_ICON} alt="CHANNEL_RIGHT_ICON" />
        </div>
        <div className={styles.statistics}>
        <span>{statistics?.viewCount} views</span>
        <span>  1week ago</span>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
