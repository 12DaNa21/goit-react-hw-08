import css from './App.module.css';
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import { useSelector} from "react-redux";
import {selectContacts} from '../../redux/contacts/contactsSlice';
import { selectNameFilter } from '../../redux/filters/filtersSlice';

export default function App() {
 

  return (
    <div className={css.container}>
      <h1 className={css.heading}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}