import "./HeaderNotLogin.css"
import headerlogo from "../../../images/logo.svg"
import { Link, NavLink } from "react-router-dom";

function HeaderNotLogin() {
  return (
    <>
      <NavLink to={"/"}>
        <img
          className="header__logo"
          src={headerlogo}
          alt="Логотип"
        /></NavLink>
      <Link className="header__component">
        <NavLink className="header__link" to={"/signin"}>Регистрация</NavLink>
        <NavLink className="header__link header__link_login" to={"/signup"}>Войти</NavLink>
      </Link>
    </>
  )
}

export default HeaderNotLogin

