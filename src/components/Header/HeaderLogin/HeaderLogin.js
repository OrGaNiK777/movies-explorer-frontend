import headerlogo from "../../../images/logo.svg"
import { NavLink } from "react-router-dom";

function HeaderLogin() {
  return (
    <header className="header header_login">
      <NavLink to={"/"}>
        <img
          className="header__logo header__logo_login"
          src={headerlogo}
          alt="Логотип"
        /></NavLink>
    </header>

  )
}

export default HeaderLogin