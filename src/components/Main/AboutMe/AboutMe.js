import "./AboutMe.css"
import Title from "../Title/Title.js"
import Photo from "../../../images/a825274c3f23c6dc799fb1f1a713a44e.jpeg"

function AboutMe() {
  return (
    <section className='aboutMe' id="aboutMeId">
      <Title textTitle="Студент" />
      <div className='aboutMe_container'>
        <h2 className='aboutMe__title1'>Роман</h2>
        <h3 className='aboutMe__title2'>Фронтенд-разработчик, 30 лет</h3>
        <p className='aboutMe__paragraph1'>
          Я живу в Екатеринбурге, закончил УГГУ факальтет Горно-механический.
          У меня есть жена.
          Я люблю слушать музыку.
          Недавно начал кодить.
          С 2020 года работаю в Энерготрединговой компании системным администратором.
        </p>
        <a className='aboutMe__paragraph2' href='https://github.com/OrGaNiK777'>
          Github
        </a>
        <img className='aboutMe__photo' src={Photo} alt='Фото студента'></img></div>

    </section>
  )
}

export default AboutMe