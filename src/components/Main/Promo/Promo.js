import "./Promo.css"
import promoImg from "../../../images/pic__COLOR_landing-logo.svg"

function Promo() {
  return (
    <section className='promo'> <div className='promo__container'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className='promo__img' src={promoImg} alt='Промо картинка'
      /></div>

    </section>
  )
}

export default Promo