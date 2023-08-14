import "./AboutMe.css"
import Title from "../Title/Title.js"
import Photo from "../../../images/a825274c3f23c6dc799fb1f1a713a44e.jpeg"

function AboutMe() {
  return (
    <section className='aboutMe' id="aboutMeId">
      <Title textTitle="Студент" />
      <div className='aboutMe_container'>
        <img className='aboutMe__photo' src={Photo} alt='Фото студента'></img>
        <h2 className='aboutMe__title1'>Виталий</h2>
        <h3 className='aboutMe__title2'>Фронтенд-разработчик, 30 лет</h3>
        <p className='aboutMe__paragraph1'>
          Я родился и живу в Саратове,
          закончил факультет экономики СГУ.
          У меня есть жена и дочь.
          Я люблю слушать музыку,
          а ещё увлекаюсь бегом. Недавно начал кодить.
          С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке,
          начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className='aboutMe__paragraph2' href='https://github.com/OrGaNiK777' target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </section>
  )
}

export default AboutMe