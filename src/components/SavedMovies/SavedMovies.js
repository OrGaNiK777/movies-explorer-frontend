import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SeachForm from "../Movies/SearchForm/SearchForm";
import MoviesCard from '../Movies/MoviesCard/MoviesCard'

function SavedMovies({ isMyMovies, handleSearchMovies, handleReceivingMyMovies, handleClick, roundedVisibleCardCount, inputValue, setInputValue }) {
  return (
    <>
      <SeachForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearchMovies={handleSearchMovies}
        handleReceivingMovies={handleReceivingMyMovies} />
      <MoviesCardList
        isMovies={isMyMovies}
        handleClick={handleClick}
        handleSearchMovies={setInputValue}>
        {isMyMovies?.slice(0, roundedVisibleCardCount).map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
          />))}</MoviesCardList>
    </>
  );
}

export default SavedMovies;
