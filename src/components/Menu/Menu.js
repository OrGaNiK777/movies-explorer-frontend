import "./Menu.css"
import closeMenu from "../../images/closeMenu.svg"
import { NavLink } from 'react-router-dom'

function Menu({ buttonProfile, isOpenMenu, setOpenMenu }) {

  return (
    <div className={isOpenMenu ? "menu menu_active" : "menu"} onClick={() => setOpenMenu(false)} >
      <div className='blur' />
      <div className='menu__content'>
        <NavLink className='menu__link' to={'/'}>Главная</NavLink>
        <NavLink className='menu__link' to={'/movies'}>Фильмы</NavLink>
        <NavLink className='menu__link' to={'/saved-movies'}>Сохраненные фильмы</NavLink>
        {buttonProfile}
        <img className='menu__buttonClose' src={closeMenu} alt='кнопка закрытия меню'></img>
      </div>
    </div>
  )
}

export default Menu