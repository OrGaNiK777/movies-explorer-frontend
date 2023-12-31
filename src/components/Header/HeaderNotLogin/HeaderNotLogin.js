import headerlogo from "../../../images/logo.svg"
import {  NavLink } from "react-router-dom";

function HeaderNotLogin() {
  return (
    <header className="header header_no-login">
      <NavLink to={"/"}>
        <img
          className="header__logo"
          src={headerlogo}
          alt="Логотип"
        /></NavLink>
      <div className="header__component header__component_no-login">
        <NavLink className="header__link" to={"/signup"}>Регистрация</NavLink>
        <NavLink className="header__link header__link_no-login" to={"/signin"}>Войти</NavLink>
      </div>
    </header>
  )
}

export default HeaderNotLogin

