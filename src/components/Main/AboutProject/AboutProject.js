import "./AboutProject.css"
import Title from "../Title/Title"

function AboutProject() {
  return (
    <section className='aboutProject' id="aboutProjectId">
      <Title textTitle="О проекте" />
      <div className='aboutProject__containerTitle'>
        <h3 className='aboutProject__title2'>Дипломный проект включал 5 этапов</h3>
        <h3 className='aboutProject__title2'>На выполнение диплома ушло 5 недель</h3>
        <h4 className='aboutProject__title3'>
          Составление плана,
          работу над бэкендом,
          вёрстку,
          добавление функциональности и финальные доработки.</h4>
        <h4 className='aboutProject__title3'>
          У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было<br /> соблюдать,
          чтобы успешно защититься.</h4>
      </div>
      <div className='aboutProject__containerParagraph'>
        <p className='aboutProject__paragraph aboutProject__paragraph_color1'>1 неделя</p>
        <p className='aboutProject__paragraph aboutProject__paragraph_color2'>4 неделя</p>
        <p className='aboutProject__paragraph aboutProject__paragraph_color3'>Back-end</p>
        <p className='aboutProject__paragraph aboutProject__paragraph_color3'>Front-end</p></div>
    </section>
  )
}

export default AboutProject