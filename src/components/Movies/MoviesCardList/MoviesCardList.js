import "./MoviesCardList.css"
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ children, handleClick, listMovies, isLoading, errorMovies }) {

  return (!isLoading ?
    children.length < 1 ?
      <p className={!errorMovies ? 'notFound' : 'notFound notFound_error'}>{!errorMovies ? "Ничего не найдено" : "Подождите немного и попробуйте ещё раз"}</p> :
      <div className='moviesCardList'>
        {children}
        <button className={
          children.length < listMovies.length ?
            'moviesCardList__buttonAdd'
            : "moviesCardList__buttonAdd_hide"
        } onClick={handleClick}>Ещё</button>
      </div> : <Preloader />
  );
}

export default MoviesCardList;
