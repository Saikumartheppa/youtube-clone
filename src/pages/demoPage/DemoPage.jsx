import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { fetchVideos } from "./demoPageService";
import { Link } from "react-router-dom";
import { VideoCard } from "../../components";
const DemoPage = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { items, status, error } = useSelector((store) => store.demoVideos);
  useEffect(() => {
    if(items.length === 0 && status === "idle"){

        dispatch(fetchVideos());
    }
  }, [dispatch , status]);
  return (
    <div
      className={`${styles.mainContainer} ${
        isMenuOpen ? styles.menuOpen : styles.menuClose
      }`}
    >
      {console.log(items)}
      {
      items.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`} key={video.id} state={{isdemomode:true}}>
            <VideoCard isMenuOpen={isMenuOpen} info={video} />
          </Link>
        );
      })}
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading videos: {error}</p>}
    </div>
  );
};

export default DemoPage;
