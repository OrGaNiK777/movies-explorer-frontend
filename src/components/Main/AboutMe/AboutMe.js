import "./AboutMe.css"
import Title from "../Title/Title.js"
import Photo from "../../../images/a825274c3f23c6dc799fb1f1a713a44e.jpg"

function AboutMe() {
  return (
    <section className='aboutMe' id="aboutMeId">
      <Title textTitle="Студент" />
      <div className='aboutMe_container'>
        <img className='aboutMe__photo' src={Photo} alt='Фото студента'></img>
        <h2 className='aboutMe__title1'>Роман</h2>
        <h3 className='aboutMe__title2'>Фронтенд-разработчик, 31 год</h3>
        <p className='aboutMe__paragraph1'>
          Я  живу в Екатеринбурге,
          закончил Уральский Государственный 
          Горный Университет
          специальность Автоматизация технологических 
          процессов и производств.
          У меня есть жена и сын.
          Решил сменить вид деятельности и на сферу программирования.
          Прошел 10 месячный курс Веб-разработчика от Яндекс.Практиума.
        </p>
        <a className='aboutMe__paragraph2' href='https://github.com/OrGaNiK777' target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </section>
  )
}

export default AboutMe