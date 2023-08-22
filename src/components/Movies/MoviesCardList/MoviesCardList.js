import "./MoviesCardList.css"
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ children, handleClick, listMovies }) {
  return (
    children.length < 1 ?
      <Preloader /> :
      <div className='moviesCardList'>
        {children}
        <button className={children.length < listMovies.length ? 'moviesCardList__buttonAdd' : "moviesCardList__buttonAdd_hide"} onClick={handleClick}>Ещё</button>
      </div>
  );
}

export default MoviesCardList;
