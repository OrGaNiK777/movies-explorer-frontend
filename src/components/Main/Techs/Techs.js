import "./Techs.css"
import Title from "../Title/Title.js"

function Techs() {
  return (
    <section className='techs' id="techsId">
      <Title textTitle="Технологии" />
      <h2 className='techs__title2'>7 технологий</h2>
      <h3 className='techs__title3'>
        На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </h3>
      <div className='techs_buttons'>
        <button className='techs_button'>HTML</button>
        <button className='techs_button'>CSS</button>
        <button className='techs_button'>JS</button>
        <button className='techs_button'>React</button>
        <button className='techs_button'>Git</button>
        <button className='techs_button'>Express.js</button>
        <button className='techs_button'>mongoDB</button>
      </div>
    </section>
  )
}

export default Techs