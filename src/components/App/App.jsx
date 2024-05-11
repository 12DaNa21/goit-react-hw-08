import css from './App.module.css';
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { MdOutlineContactPhone } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={css.container}>
      <h1 className={css.heading}><MdOutlineContactPhone size={30}/>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader>Loading tasks, please wait</Loader>}
      {error && <Error>Error message</Error>}
      <ContactList />
    </div>
  );
}