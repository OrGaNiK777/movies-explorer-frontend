import { useLocation } from 'react-router-dom';
import "./MoviesCard.css"
import { useEffect, useState } from 'react';


function MovieCard({ movie, handleClickLike, saveMovies, handleClickDelLike }) {
  const location = useLocation()

  const [onLike, setOnLike] = useState(false)

  const checkMovies = () => saveMovies.find((i) => (i.movieId === movie.id));

  const timing = (duration) => {
    const hours = Math.floor(duration / 60);
    const minuts = duration % 60;

    return hours === 0 ? `${minuts} м` : minuts === 0 ? `${hours} ч` : `${hours}ч ${minuts} м`
  };

  const onAddMovie = () => {
    handleClickLike(movie)
    setOnLike(true)
  };

  const onDelMovie = () => {

    const myMovie = checkMovies()

    console.log(myMovie)
    handleClickDelLike(myMovie)
    setOnLike(false)

  };

  const onDelSaveMovie = () => {
    handleClickDelLike(movie)
  }

  const searchMyMovie = () => {

    const myMovie = checkMovies()

    if (myMovie) {
      setOnLike(true);
    } else {
      setOnLike(false);
    }
  };

  useEffect(() => {
    searchMyMovie();
  }, []);

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
          <button id="button" type='button' className={`moviesCard__likes 
          ${onLike ? "moviesCard__likes_active" : ""}`} onClick={
              onLike ? onDelMovie : onAddMovie} />
          <p className='moviesCard__duration'>{timing(movie.duration)}</p>
        </div> :
        <div className='moviesCard__container-description'>
          <h2 className='moviesCard__title'>{movie.nameRU}</h2>
          <button id="button" type='button' className="moviesCard__likes moviesCard__likes_active moviesCard__likes_hover" onClick={onDelSaveMovie} />
          <p className='moviesCard__duration'>{timing(movie.duration)}</p>
        </div>}
    </article>
  )
}

export default MovieCard;
