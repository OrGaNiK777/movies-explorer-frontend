import MoviesCardList from './MoviesCardList/MoviesCardList';
import SeachForm from "./SearchForm/SearchForm";
import MoviesCard from './MoviesCard/MoviesCard'

function Movies({
  isMovies,
  setIsMovies,
  handleReceivingMovies,
  handleClick,
  roundedVisibleCardCount,
  setInputValue,
  onShortMovies,
  setOnShortMovies,
  handleShortMovies,
  handleReceivingShortMovies
}) {
  //получение короткометражных фильмов 
  const listMovies = !onShortMovies ? isMovies.filter(
    (function (item) {
      return item.duration < "53"
    })) : isMovies

  return (
    <>
      <SeachForm
        setInputValue={setInputValue}
        handleReceivingMovies={handleReceivingMovies}
        onShortMovies={onShortMovies}
        setOnShortMovies={setOnShortMovies}
        handleShortMovies={handleShortMovies}
        handleReceivingShortMovies={handleReceivingShortMovies} 
        isMovies={isMovies}
        setIsMovies={setIsMovies} />
      <MoviesCardList
        listMovies={listMovies}
        handleClick={handleClick}
        handleSearchMovies={setInputValue}>
        {listMovies?.slice(0, roundedVisibleCardCount).map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id}
          />))}</MoviesCardList>
    </>
  );
}

export default Movies;
