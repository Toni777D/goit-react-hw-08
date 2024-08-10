import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage(){
    return (
        <div className={styles.registerPage}>
            <h2 className={styles.registerTitle}>Register your account</h2>
            <RegistrationForm />
        </div>
    )
}