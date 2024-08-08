import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';


export default function ContactForm(){
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const text = form.elements.text.values;
        if(text !== "") {
            dispatch(addContact(text))
            form.reset();
            return;
        }
        
        alert("Task cannot be empry");
    };
   
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Add task</button>
    </form>
    );
}

