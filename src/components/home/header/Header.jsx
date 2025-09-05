import React, { useState } from "react";
import styles from "./style.module.css";
import MENU_ICON from "../../../assets/menuHamburger.svg";
import YOUTUBE_ICON from "../../../assets/youtubeIcon.svg";
import SEARCH_ICON from "../../../assets/searchIcon.svg";
import ADD_ICON from "../../../assets/addIcon.svg";
import NOTIFICATION_ICON from "../../../assets/notificationIcon.svg";
import PROFILE_AVATAR from "../../../assets/profileLogo.svg";
import MIC_ICON from "../../../assets/micIcon.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../store/slices/appSlice";
import { Link } from "react-router-dom";
import useYoutubeSuggestions from "../../../hooks/useYoutubeSuggestions";

const Header = () => {
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { searchQuery, setSearchQuery, suggestions } = useYoutubeSuggestions();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <span className={styles.menuIcon} onClick={toggleMenuHandler}>
          <img src={MENU_ICON} alt="MENU_ICON" />
        </span>
        <Link to={"/"}>
          <span>
            <img src={YOUTUBE_ICON} alt="YOUTUBE_ICON"></img>
          </span>
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <span>
            <input
              value={searchQuery}
              onChange={onChangeHandler}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              type="text"
              placeholder="Search"
            />
          </span>
          <span className={styles.searchIcon}>
            <img src={SEARCH_ICON} alt="SEARCH_ICON" />
          </span>
        </div>
        <div className={styles.micIcon}>
          <img src={MIC_ICON} alt="MIC_ICON" />
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div
            className={styles.suggestionsContainer}
            onMouseDown={(e) => e.preventDefault()}
          >
            <ul className={styles.suggestionsList}>
              {suggestions.map((s, index) => (
                <div
                  onClick={() => {
                    setSearchQuery(s);
                    setShowSuggestions(false);
                  }}
                  key={index}
                  className={styles.suggestionItem}
                >
                  <img src={SEARCH_ICON} alt="SEARCH_ICON" />
                  <li>{s}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.create}>
          <span>
            <img src={ADD_ICON} alt="ADD_ICON" />
          </span>
          <span>Create</span>
        </div>
        <span className={styles.notification}>
          <img src={NOTIFICATION_ICON} alt="NOTIFICATION_ICON" />
        </span>
        <span className={styles.profile}>
          <img src={PROFILE_AVATAR} alt="PROFILE_AVATAR"></img>
        </span>
      </div>
    </div>
  );
};

export default Header;
