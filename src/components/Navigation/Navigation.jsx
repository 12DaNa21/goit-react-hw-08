import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import { IoHome } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.container}>
      <NavLink className={css.link} to="/">
      <IoHome className={css.icon}/>Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <IoIosContacts className={css.icon}/> Contacts
        </NavLink>
      )}
    </nav>
  );
}