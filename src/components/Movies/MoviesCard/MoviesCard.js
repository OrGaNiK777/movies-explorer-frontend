import "./MoviesCard.css"

function MovieCard({ movie }) {
  return (
    <article className="moviesCard" >
      <img className='moviesCard__img' src={movie.image} alt='картинка фильма' />
      <div className='moviesCard__container-description'>
        <h2 className='moviesCard__title'>{movie.description}</h2>
        <button className='moviesCard__likes' ></button>
        <p className='moviesCard__duration'>{movie.duration}</p></div>
    </article>
  )
}



export default MovieCard;
