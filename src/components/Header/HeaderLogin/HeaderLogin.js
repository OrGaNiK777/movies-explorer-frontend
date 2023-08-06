import "./HeaderLogin.css"
import headerlogo from "../../../images/logo.svg"
import { Link, NavLink } from "react-router-dom";

function HeaderLogin() {
  return (
    <Link className="headerAuth__component">
      <NavLink to={"/"}>
        <img
          className="header__logo"
          src={headerlogo}
          alt="Логотип"
        /></NavLink>
    </Link>

  )
}

export default HeaderLogin