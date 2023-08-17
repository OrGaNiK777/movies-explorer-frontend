import "./Techs.css"
import Title from "../Title/Title.js"

function Techs() {
  return (
    <section className='techs' id="techsId">
      <Title textTitle="Технологии" individual="techs__line-individual" />
      <h2 className='techs__title2'>7 технологий</h2>
      <h3 className='techs__title3'>
        На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </h3>
      <div className='techs__buttons'>
        <button className='techs__button'>HTML</button>
        <button className='techs__button'>CSS</button>
        <button className='techs__button'>JS</button>
        <button className='techs__button'>React</button>
        <button className='techs__button'>Git</button>
        <button className='techs__button'>Express.js</button>
        <button className='techs__button'>mongoDB</button>
      </div>
    </section>
  )
}

export default Techs