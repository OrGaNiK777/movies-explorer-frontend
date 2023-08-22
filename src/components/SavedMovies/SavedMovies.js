import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SeachForm from "../Movies/SearchForm/SearchForm";
import MoviesCard from '../Movies/MoviesCard/MoviesCard'

function SavedMovies({
  isMyMovies,
  handleReceivingMyMovies,
  handleClick,
  roundedVisibleCardCount,
  setInputValue,
  onShortMovies,
  handleShortMovies,
  handleReceivingShortMyMovies
}) {

  //получение короткометражных фильмов 
  const listMovies = !onShortMovies ? isMyMovies.filter(
    (function (item) {
      return item.duration < "53"
    })) : isMyMovies

  return (
    <>
      <SeachForm
        setInputValue={setInputValue}
        handleReceivingMovies={handleReceivingMyMovies}
        onShortMovies={onShortMovies}
        handleShortMovies={handleShortMovies}
        handleReceivingShortMovies={handleReceivingShortMyMovies}
        isMovies={isMyMovies} />
      <MoviesCardList
        listMovies={listMovies}
        handleClick={handleClick}
        handleSearchMovies={setInputValue}>
        {listMovies?.slice(0, roundedVisibleCardCount).map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
          />))}</MoviesCardList>
    </>
  );
}

export default SavedMovies;
