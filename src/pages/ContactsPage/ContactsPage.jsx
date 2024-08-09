import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import {selectLoading} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";


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
            <div>
                <h2>Your contacts</h2>
                <ContactForm/>
                <div>{loading && "Request in progress"}</div>
                <ContactList/>
                <SearchBox/>
           </div>)}
        </div>
    );
}