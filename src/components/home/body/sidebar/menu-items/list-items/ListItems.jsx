import styles from "./style.module.css";
import React from "react";
import HOME_ICON from "../../../../../../assets/homeIcon.svg";
import SHORTS_ICON from "../../../../../../assets/shortsIcon.svg";
import HISTORY_ICON from "../../../../../../assets/historyIcon.svg";
import PLAYLIST_ICON from "../../../../../../assets/playlistIcon.svg";
import YOURVIDEOS_ICON from "../../../../../../assets/yourVideosIcon.svg";
import YOURCOURSES_ICON from "../../../../../../assets/yourCoursesIcon.svg";
import WATCHLATER_ICON from "../../../../../../assets/watchLaterIcon.svg";
import LIKEDVIDEOS_ICON from "../../../../../../assets/likedVideosIcon.svg";
import DOWNLOAD_ICON from "../../../../../../assets/downloadIcon.svg";
import SUBSCRIPTIONS_ICON from "../../../../../../assets/subscriptionsIcon.svg";
import RIGHTSIDE_ICON from "../../../../../../assets/rightSideArrowIcon.svg";
import PROFILE_ICON from "../../../../../../assets/profileLogo.svg";
import SHOPPING_ICON from "../../../../../../assets/shoppingIcon.svg";
import MUSIC_ICON from "../../../../../../assets/musicIcon.svg";
import FILMS_ICON from "../../../../../../assets/filmsIcon.svg";
import LIVE_ICON from "../../../../../../assets/liveIcon.svg";
import NEWS_ICON from "../../../../../../assets/newsIcon.svg";
import SPORTS_ICON from "../../../../../../assets/sportsIcon.svg";
import COURSES_ICON from "../../../../../../assets/yourCoursesIcon.svg";
import FASHION_ICON from "../../../../../../assets/fashionIcon.svg";
import PODCAST_ICON from "../../../../../../assets/podcastsIcon.svg";
import GAMING_ICON from "../../../../../../assets/gamingIcon.svg";
import SETTINGS_ICON from "../../../../../../assets/settingsIcon.svg";
import REPORT_ICON from "../../../../../../assets/reportIcon.svg";
import HELP_ICON from "../../../../../../assets/helpIcon.svg";
import FEEDBACK_ICON from "../../../../../../assets/feedbackIcon.svg";
const ListItems = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <div>
            <img src={HOME_ICON} alt="HOME_ICON" />
          </div>
          <div>Home</div>
        </li>
        <li>
          <div>
            <img src={SHORTS_ICON} alt="SHORTS_ICON" />
          </div>
          <div>Shorts</div>
        </li>
        <li>
          <div>
            <img src={SUBSCRIPTIONS_ICON} alt="SUBSCRIPTIONS_ICON" />
          </div>
          <div>Subscriptions</div>
        </li>
      </ul>
      <div>
        <div className={styles.itemsTitle}>
          <h2 className={styles.title}>You</h2>
          <img src={RIGHTSIDE_ICON} alt="RIGHTSIDE_ARROW" />
        </div>
        <ul>
          <li>
            <div>
              <img src={HISTORY_ICON} alt="HISTORY_ICON" />
            </div>
            <div>History</div>
          </li>
          <li>
            <div>
              <img src={PLAYLIST_ICON} alt="PLAYLIST_ICON" />
            </div>
            <div>Playlists</div>
          </li>
          <li>
            <div>
              <img src={YOURVIDEOS_ICON} alt="YOURVIDEOS_ICON" />
            </div>
            <div>Your videos</div>
          </li>
          <li>
            <div>
              <img src={YOURCOURSES_ICON} alt="YOURCOURSES_ICON" />
            </div>
            <div>Your courses</div>
          </li>
          <li>
            <div>
              <img src={WATCHLATER_ICON} alt="WATCHLATER_ICON" />
            </div>
            <div>Watch Later</div>
          </li>
          <li>
            <div>
              <img src={LIKEDVIDEOS_ICON} alt="LIKEDVIDEOS_ICON" />
            </div>
            <div>Liked videos</div>
          </li>
          <li>
            <div>
              <img src={DOWNLOAD_ICON} alt="DOWNLOAD_ICON" />
            </div>
            <div>Downloads</div>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.itemsTitle}>
          <h2 className={styles.title}>Subscriptions</h2>
          <img src={RIGHTSIDE_ICON} alt="RIGHTSIDE_ARROW" />
        </div>
        <ul>
          <li>
            <div>
              <img src={PROFILE_ICON} alt="PROFILE_ICON" />
            </div>
            <div>take U forward</div>
          </li>
          <li>
            <div>
              <img src={PROFILE_ICON} alt="PROFILE_ICON" />
            </div>
            <div>Akshay Saini</div>
          </li>
          <li>
            <div>
              <img src={PROFILE_ICON} alt="PROFILE_ICON" />
            </div>
            <div>CodeWIthHarry</div>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.itemsTitle}>
          <h2 className={styles.title}>Subscriptions</h2>
          <img src={RIGHTSIDE_ICON} alt="RIGHTSIDE_ARROW" />
        </div>
        <ul>
          <li>
            <div>
              <img src={SHOPPING_ICON} alt="SHOPPING_ICON" />
            </div>
            <div>Shopping</div>
          </li>
          <li>
            <div>
              <img src={MUSIC_ICON} alt="MUSIC_ICON" />
            </div>
            <div> Music</div>
          </li>
          <li>
            <div>
              <img src={FILMS_ICON} alt="FILMS_ICON" />
            </div>
            <div>Films</div>
          </li>
          <li>
            <div>
              <img src={LIVE_ICON} alt="LIVE_ICON" />
            </div>
            <div>Live</div>
          </li>
          <li>
            <div>
              <img src={GAMING_ICON} alt="GAMING_ICON" />
            </div>
            <div>Gaming</div>
          </li>
          <li>
            <div>
              <img src={NEWS_ICON} alt="NEWS_ICON" />
            </div>
            <div>News</div>
          </li>
          <li>
            <div>
              <img src={SPORTS_ICON} alt="SPORTS_ICON" />
            </div>
            <div>Sports</div>
          </li>
          <li>
            <div>
              <img src={COURSES_ICON} alt="COURSES_ICON" />
            </div>
            <div>Courses</div>
          </li>
          <li>
            <div>
              <img src={FASHION_ICON} alt="FASHION_ICON" />
            </div>
            <div>Fashion & beauty</div>
          </li>
          <li>
            <div>
              <img src={PODCAST_ICON} alt="PODCAST_ICON" />
            </div>
            <div>Podcasts</div>
          </li>
        </ul>
      </div>
      <div className={styles.settings}>
        <ul>
          <li>
            <div>
              <img src={SETTINGS_ICON} alt="SETTINGS_ICON" />
            </div>
            <div>Settings</div>
          </li>
          <li>
            <div>
              <img src={REPORT_ICON} alt="REPORT_ICON" />
            </div>
            <div> Report history</div>
          </li>
          <li>
            <div>
              <img src={HELP_ICON} alt="HELP_ICON" />
            </div>
            <div>Help</div>
          </li>
          <li>
            <div>
              <img src={FEEDBACK_ICON} alt="FEEDBACK_ICON" />
            </div>
            <div>Send feedback</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListItems;
