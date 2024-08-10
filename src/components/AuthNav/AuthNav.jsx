import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css"

export default function AuthNav(){
    return (
        <div className={styles.navigation}>
            <NavLink className={styles.navLink} to="/register">Registration</NavLink>
            <NavLink className={styles.navLink} to="/login">Log in</NavLink>
        </div>
    );
}