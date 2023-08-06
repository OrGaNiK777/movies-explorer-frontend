import "./HeaderAuth.css"
import headerButtonProfile from "../../../images/buttonProfile.svg"
import { Link, NavLink } from "react-router-dom";

function HeaderAuth() {
  return (
    <Link className="headerAuth__component">
      <NavLink className="headerAuth__link" to={"/movies"}>Фильмы</NavLink>
      <NavLink className="headerAuth__link" to={"/saved-movies"}>Сохранённые фильмы</NavLink>
      <NavLink className="headerAuth__buttonProfiles" to={"/profile"}>
        <img
          src={headerButtonProfile}
          alt="Кнопка Профиль"
        /></NavLink>
    </Link>
  )
}

export default HeaderAuth; 