import { useLocation } from 'react-router-dom';
import "./MoviesCard.css"


function MovieCard({ movie, handleClickLike, saveMovies, handleClickDelLike }) {
  const location = useLocation()
  const isLiked = saveMovies.find((i) => (i.movieId === movie.id));

  const timing = (duration) => {
    const hours = Math.floor(duration / 60);
    const minuts = duration % 60;

    return hours === 0 ? `${minuts} м` : minuts === 0 ? `${hours} ч` : `${hours}ч ${minuts} м`
  };

  const onAddMovie = () => {
    handleClickLike(movie)
  };

  const delMovie = () => {
    handleClickDelLike(saveMovies.find((i) => (i.movieId))._id)
  }
  return (
    <article className="moviesCard" >
      <a className='moviesCard_link' href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className='moviesCard__img' src={(location.pathname === '/movies') ?
          `https://api.nomoreparties.co${movie.image.url}`
          : movie.image} alt='картинка фильма' />
      </a>
      {(location.pathname === '/movies') ?
        <div className='moviesCard__container-description'>
          <h2 className='moviesCard__title'>{movie.nameRU}</h2>
          <button id="button" type='button' className={`moviesCard__likes ${isLiked ? "moviesCard__likes_active" : ""}`} onClick={onAddMovie} />
          <p className='moviesCard__duration'>{timing(movie.duration)}</p>
        </div> :
        <div className='moviesCard__container-description'>
          <h2 className='moviesCard__title'>{movie.nameRU}</h2>
          <button id="button" type='button' className="moviesCard__likes moviesCard__likes_active moviesCard__likes_hover" onClick={delMovie} />
          <p className='moviesCard__duration'>{timing(movie.duration)}</p>
        </div>}
    </article>
  )
}

export default MovieCard;
