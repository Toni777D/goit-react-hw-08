import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm(){
    const dispatch = useDispatch();

    const handleSubmit =  (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    return(
        <div>
            <Formik initialValues={{
                name: "",
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}
            >
                <Form className={styles.form} autoComplete="off">
                    <label className={styles.field}>
                        <Field className={styles.input} type="text" name="name" placeholder="Username"/>
                    </label>

                    <label className={styles.field}>
                        <Field className={styles.input} type="email" name="email" placeholder="Email"/>
                    </label>

                    <label className={styles.field}>
                        <Field className={styles.input} type="password" name="password" placeholder="Password"/>
                    </label>
                    
                    <button className={styles.btn} type="submit">Register</button>
                    
                </Form>
            </Formik>
        </div>
    );
}