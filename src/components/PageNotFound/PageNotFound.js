import "./PageNotFound.css"

function PageNotFound() {
  return (
    <section className='pageNotFound'>
      <h2 className='pageNotFound__title'>404</h2>
      <p className='pageNotFound__paragraph'>Страница не найдена</p>
      <a className='pageNotFound__back' href='/'>Нaзад</a>
    </section>)
}

export default PageNotFound