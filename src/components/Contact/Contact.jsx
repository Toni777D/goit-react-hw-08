import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

export default function Contact({id, text }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
dispatch(deleteContact(id))
    }

    return(
        <div className={styles.item}>   
                <p className={styles.text}>{text}</p>
                <button type="button" className={styles.btn} onClick={handleDelete}>Delete</button>
            </div>
    );
}
