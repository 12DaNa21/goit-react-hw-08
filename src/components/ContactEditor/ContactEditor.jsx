import { useDispatch } from "react-redux";
import { addContact } from "../../redux/tasks/contactsOps";
import css from "./ContactEditor.module.css";
import ContactForm from "../ContactForm/ContactForm";
export default function ContactEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== "") {
      dispatch(addContact(text));
      form.reset();
      return;
    }
    alert("Task cannot be empty. Enter some text!");
  };

  return (
    
      
      <ContactForm />
    
  );
}