import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

export default function LoginForm(){
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    }
    return (
        <Formik
        initialValues={{
            email: "",
            password: "",
        }}
        onSubmit={handleSubmit}>
            <Form className={styles.form} autoComplete="off">
                <label className={styles.field}>
                    
                    <Field className={styles.input} type="email" name="email" placeholder="Email"/>
                </label>
                <label className={styles.field}>
                    
                    <Field className={styles.input} type="password" name="password" placeholder="Password"/>
                </label>
                <button className={styles.btn} type="submit">Log in</button>
            </Form>

        </Formik>
    );
}