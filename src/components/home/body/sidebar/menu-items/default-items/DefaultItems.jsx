import HOME_ICON from "../../../../../../assets/homeIcon.svg";
import SHORTS_ICON from "../../../../../../assets/shortsIcon.svg";
import SUBSCRIPTIONS_ICON from "../../../../../../assets/subscriptionsIcon.svg";
import DOWNLOAD_ICON from  "../../../../../../assets/downloadIcon.svg";
import PROFILE_AVATAR from "../../../../../../assets/profileLogo.svg";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
const DefaultItems = () => {
  const user = useSelector((store) => store.app.user);
  return (
    <div className={styles.defaultItems}>
      <ul className={styles.defaultItemsList}>
        <li className={styles.defaultItemsListItem}>
          <div className={styles.imageContainer}>
            <img src={HOME_ICON} alt="HOME_ICON" />
          </div>
          <div>Home</div>
        </li>
        <li className={styles.defaultItemsListItem}>
          <div className={styles.imageContainer}>
            <img src={SHORTS_ICON} alt="SHORTS_ICON" />
          </div>
          <div>Shorts</div>
        </li>
        <li className={styles.defaultItemsListItem}>
          <div className={styles.imageContainer}>
            <img src={SUBSCRIPTIONS_ICON} alt="SUBSCRIPTIONS_ICON" />
          </div>
          <div>Subscriptions</div>
        </li>
        <li className={styles.defaultItemsListItem}>
          <div className={styles.imageContainer}>
            <img className={styles.profileIcon} src={user.photoURL || PROFILE_AVATAR} alt="PROFILE_AVATAR" />
          </div>
          <div>You</div>
        </li>
        <li className={styles.defaultItemsListItem}>
          <div className={styles.imageContainer}>
            <img src={DOWNLOAD_ICON} alt="DOWNLOAD_ICON" />
          </div>
          <div>Downloads</div>
        </li>
      </ul>
    </div>
  );
};
export default DefaultItems;