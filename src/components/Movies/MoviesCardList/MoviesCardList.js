import "./MoviesCardList.css"
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ children, handleClick, listMovies, isLoading }) {

  return (!isLoading ?
    children.length < 1 ?
      <p className='notFound'>Ничего не найдено</p> :
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
