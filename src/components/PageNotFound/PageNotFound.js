import "./PageNotFound.css"

function PageNotFound({ navigate }) {
  return (
    <section className='pageNotFound'>
      <h2 className='pageNotFound__title'>404</h2>
      <p className='pageNotFound__paragraph'>Страница не найдена</p>
      {/* eslint-disable-next-line */}
      <a className='pageNotFound__back' onClick={() => navigate(-1)}>Нaзад</a>
    </section>)
}

export default PageNotFound