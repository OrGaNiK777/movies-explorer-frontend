import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SeachForm from "../Movies/SearchForm/SearchForm";
import MoviesCard from '../Movies/MoviesCard/MoviesCard'
import { useEffect } from 'react';

function SavedMovies({
  allMovies,
  saveMovies,
  handleReceivingSaveMovies,
  handleClick,
  roundedVisibleCardCount,
  setInputValue,
  onShortMovies,
  handleShortMovies,
  handleReceivingShortMyMovies,
  handleClickDelLike
}) {
  //получение короткометражных фильмов 
  const listMovies = !onShortMovies ? saveMovies.filter(
    (function (item) {
      return item.duration < "53" //из википедии фильмы 52 минуты и меньше считаются короткометражными
    })) : saveMovies
  useEffect(() => handleReceivingSaveMovies(), [])
  return (
    <>
      <SeachForm
        setInputValue={setInputValue}
        handleReceivingMovies={handleReceivingSaveMovies}
        onShortMovies={onShortMovies}
        handleShortMovies={handleShortMovies}
        handleReceivingShortMovies={handleReceivingShortMyMovies}
        allMovies={saveMovies} />
      <MoviesCardList
        listMovies={listMovies}
        handleClick={handleClick}
        handleSearchMovies={setInputValue}>
        {listMovies?.slice(0, roundedVisibleCardCount).map((movie) => (
          <MoviesCard
            allMovies={allMovies}
            saveMovies={saveMovies}
            movie={movie}
            key={movie._id}
            handleClickDelLike={handleClickDelLike}
          />))}</MoviesCardList>
    </>
  );
}

export default SavedMovies;
