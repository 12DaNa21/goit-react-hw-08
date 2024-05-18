import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { AiOutlineLogout } from "react-icons/ai";


export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.logbtn} onClick={handleLogout} type="submit">
      <AiOutlineLogout className={css.icon}/>
            Log Out
          </button>
    </div>
  );
}