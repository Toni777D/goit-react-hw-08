import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

export default function Contact({ name, number, id }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
dispatch(deleteContact(id))
    }

    return(
        <div className={styles.item}>   
                <div className={styles.data}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.number}>{number}</p>
                </div>
                <button type="button" className={styles.btn} onClick={handleDelete}>Delete</button>
            </div>
    );
}
