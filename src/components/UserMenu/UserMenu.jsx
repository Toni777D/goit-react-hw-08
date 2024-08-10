import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css"

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return(
        <div className={styles.welcomUser}>
            <p className={styles.title}>Welcome, {user.name}</p>
            <button className={styles.btn} type="button" onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    );
}