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
    </section>


  );
}

export default MoviesCardList;
