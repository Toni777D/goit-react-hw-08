import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import {selectError, selectLoading} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";


export default function ContactsPage() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error  = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return(
        <div>
            <h2>Your contacts</h2>
            <ContactForm/>
            {loading && <p>Loading contact ...</p>}
            {error && <p>Error: {error}</p>}
            <SearchBox/>
            <ContactList/>
        </div>
    );
}