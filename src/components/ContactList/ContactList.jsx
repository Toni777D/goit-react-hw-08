import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import {selectContacts} from '../../redux/contacts/selectors';
import styles from './ContactList.module.css';

export default function ContactList(){
    const contacts = useSelector(selectContacts);

    return (
        <ul className={styles.list}>
           {contacts.map(({id, text}) => (
            <li key={id}>
                <Contact key={id} text={text}/> 
            </li>
                  
           ))}
        </ul>
    );
    }