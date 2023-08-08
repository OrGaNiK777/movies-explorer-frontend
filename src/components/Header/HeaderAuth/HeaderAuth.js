import headerlogo from "../../../images/logo.svg"
import headerButtonProfile from "../../../images/buttonProfile.svg"
import { Link, NavLink } from "react-router-dom";

function HeaderAuth() {
  return (
    <header className="header header_auth">
      <NavLink to={"/"}>
        <img
          className="header__logo"
          src={headerlogo}
          alt="Логотип"
        /></NavLink>
      <Link className="header__component header__component_auth">
        <NavLink className="header__link header__link_auth" to={"/movies"}>Фильмы</NavLink>
        <NavLink className="header__link header__link_auth" to={"/saved-movies"}>Сохранённые фильмы</NavLink>
        <NavLink className="header__buttonProfiles" to={"/profile"}>
          <img
            src={headerButtonProfile}
            alt="Кнопка Профиль"
          />
        </NavLink>
      </Link>
    </header>
  )
}

export default HeaderAuth; 