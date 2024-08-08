import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';


export default function ContactForm(){
    const dispatch = useDispatch();

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const text = form.elements.text.value;
        if(text !== "") {
            
            dispatch(addContact(text))
            form.reset();
            return;
        }else{
            alert("Task cannot be empry");
        }
        
        
    };
   
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="text"/>
        <button type="submit">Add task</button>
    </form>
    );
}

