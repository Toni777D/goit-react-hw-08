import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import {selectLoading} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";


export default function ContactsPage() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return(
        <div>
            <h2>Your contacts</h2>
            <ContactForm/>
            <div>{loading && "Request in progress"}</div>
            {error && <p>Error: {error}</p>}
            <ContactList/>
        </div>
    );
}