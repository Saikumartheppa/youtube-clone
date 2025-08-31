import { Outlet } from "react-router-dom";
import { Header } from "./header";
import styles from "./style.module.css";

const Home = () => {
    return (
        <>
        <div className={styles.container}></div>
        <Header />
        <Outlet/>
        </>
    )
}
export default Home;