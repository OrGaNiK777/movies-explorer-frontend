import "./MoviesCard.css"

function MovieCard({ movie }) {
  const timing = (duration) => {
    const hours = Math.floor(duration / 60);
    const minuts = duration % 60;

    return hours === 0 ? `${minuts}м` : minuts === 0 ? `${hours}ч` : `${hours}ч ${minuts}м`
  };

  return (
    <article className="moviesCard" >
      <a className='moviesCard_link' href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className='moviesCard__img' src={`https://api.nomoreparties.co/${movie.image.url}`} alt='картинка фильма' />
      </a>
      <div className='moviesCard__container-description'>
        <h2 className='moviesCard__title'>{movie.nameRU}</h2>
        <button className='moviesCard__likes' ></button>
        <p className='moviesCard__duration'>{timing(movie.duration)}</p>
      </div>
    </article>
  )
}

export default MovieCard;
