import css from "./Contact.module.css";
import { TiDelete } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({data: { id, name, number}}){
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id))
    } 

    return (
        <div className={css.contacts}>
            <p className={css.text}><FaUser />      {name}</p>
            <p className={css.text}><FaPhoneAlt />     {number}</p>
            <button className={css.sbmbtn} onClick={handleDelete}>
            <TiDelete className={css.delete}/>Delete</button>
        </div>
    )
}