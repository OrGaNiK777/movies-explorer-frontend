import { useState } from 'react';
import headerlogo from "../../../images/logo.svg"
import headerButtonProfile from "../../../images/buttonProfile.svg"
import headerMenuProfile from "../../../images/headerMenuAuth.svg"
import { NavLink } from "react-router-dom";
import Menu from '../../Menu/Menu';

function HeaderAuth({ styleBack }) {

  const [isOpenMenu, setOpenMenu] = useState(false)

  function toggleOpenMenu() {
    setOpenMenu(!isOpenMenu)
  }

  const buttonProfile =
    <NavLink className="header__button header__button_auth" to={"/profile"}>
      <p className='header__button-text'>Аккаунт</p>
      <div className='header__button-profile'>
        <img
          className='header__button-svg'
          src={headerButtonProfile}
          alt="Кнопка Профиль"
        />
      </div>
    </NavLink>

  return (
    <header className="header header_auth" style={styleBack}>
      <NavLink to={"/"}>
        <img
          className="header__logo header__logo_auth"
          src={headerlogo}
          alt="Логотип"
        /></NavLink>
      <div className="header__component header__component_auth">
        <NavLink className="header__link header__link_auth" to={"/movies"}>Фильмы</NavLink>
        <NavLink className="header__link header__link_auth" to={"/saved-movies"}>Сохранённые фильмы</NavLink>
        {buttonProfile}
      </div>
      <div className="header__menu">
        <img
          className='header__menu-svg'
          src={headerMenuProfile}
          alt="Кнопка меню"
          onClick={toggleOpenMenu}
        />
        <Menu isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu} buttonProfile={buttonProfile} />
      </div>
    </header>
  )
}

export default HeaderAuth; 