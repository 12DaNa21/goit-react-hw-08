import css from "./PageTitle.module.css";
import { MdOutlineContactPhone } from "react-icons/md";

export default function PageTitle({children}) {
  return <h1 className={css.heading}><MdOutlineContactPhone size={30}/>Phonebook</h1>;
}