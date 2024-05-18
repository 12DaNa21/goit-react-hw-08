import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { RiRegisteredLine } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";

export default function AuthNav() {
  return (
    <div className={css.nav}>
      <NavLink className={css.link} to="/register">
      <RiRegisteredLine className={css.icon} color="rgb(9, 68, 30)"/>Register
      </NavLink>
      <NavLink className={css.link} to="/login">
      <IoMdLogIn className={css.icon} color="rgb(9, 68, 30)"/>Log In
      </NavLink>
    </div>
  );
}