import "./MoviesCardList.css"

import MoviesCard from '../MoviesCard/MoviesCard';
import { initMovies } from '../../../utils/initMovies';

function MoviesCardList() {

  return (
    <section className='moviesCardList'>
      {initMovies.map((movie) => (
        <MoviesCard movie={movie}
        />
      ))}
      <button className='moviesCardList__buttonAdd'>Ещё</button>
    </section>


  );
}

export default MoviesCardList;
