import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts} from '../../redux/contacts/selectors';
import styles from './ContactList.module.css';

export default function ContactList(){
    const contacts = useSelector(selectFilteredContacts);
console.log(contacts);
    return (
        <ul className={styles.list}>
           {contacts.map(({id, name, number}) => (
            <li key={id}>
                <Contact key={id} id={id} name={name} number={number}/> 
            </li>
                  
           ))}
        </ul>
    );
    }