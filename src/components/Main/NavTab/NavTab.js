import "./NavTab.css"

function NavTab() {
  return (
    <div className='navTab'>
      <div className='navTab__container'>
        <a className="navTab__nav" href="#aboutProjectId">О проекте</a>
        <a className="navTab__nav" href="#techsId">Технологии</a>
        <a className="navTab__nav" href="#aboutMeId">Студент</a>
      </div>
    </div>
  )
}

export default NavTab