import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css"

export default function LoginPage(){
    return(
        <div className={styles.loginPage}>
             <h2 className={styles.loginTitle}>Please log in</h2>
             <LoginForm/>
        </div>
       
    )
}