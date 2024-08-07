import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList(){

    const visibleContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={styles.list}>
           {visibleContacts.map(({id, name, number}) => (
                <Contact key={id} id={id} name={name} number={number}/>   
           ))}
        </ul>
    );
    }