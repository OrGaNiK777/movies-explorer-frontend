import MoviesCardList from './MoviesCardList/MoviesCardList';
import SeachForm from "./SearchForm/SearchForm";
import MoviesCard from './MoviesCard/MoviesCard'

function Movies({isMovies, handleReceivingMovies, handleClick, roundedVisibleCardCount, setInputValue }) {

  return (
    <>
      <SeachForm
        setInputValue={setInputValue}
        handleReceivingMovies={handleReceivingMovies} />
      <MoviesCardList
        isMovies={isMovies}
        handleClick={handleClick}
        handleSearchMovies={setInputValue}>
        {isMovies?.slice(0, roundedVisibleCardCount).map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id}
          />))}</MoviesCardList>
    </>
  );
}

export default Movies;
