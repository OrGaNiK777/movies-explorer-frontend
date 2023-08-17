import "./MoviesCardList.css"

import MoviesCard from '../MoviesCard/MoviesCard';
import { initMovies } from '../../../utils/initMovies';

function MoviesCardList() {

  return (
    <div className='moviesCardList'>
      {initMovies.map((movie) => (
        <MoviesCard movie={movie}
        />
      ))}
      <button className='moviesCardList__buttonAdd'>Ещё</button>
    </div>


  );
}

export default MoviesCardList;
