import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import {selectLoading} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./ContactsPage.module.css";


export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const loading = useSelector(selectLoading);
    
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return(
        <div>  
           {isLoggedIn && ( 
            <div className={styles.contactsPage}>
                <h2 className={styles.title}>Your contacts</h2>
                <ContactForm/>
                <SearchBox/>
                <div>{loading && "Request in progress"}</div>
                <ContactList/>
           </div>)}
        </div>
    );
}