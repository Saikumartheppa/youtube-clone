import {Body} from  "./body";
import { Header } from "./header";
import styles from "./style.module.css";

const Home = () => {
    return (
        <>
        <div className={styles.container}></div>
        <Header />
        <Body />
        </>
    )
}
export default Home;