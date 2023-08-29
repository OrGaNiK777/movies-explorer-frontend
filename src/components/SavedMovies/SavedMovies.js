import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SeachForm from "../Movies/SearchForm/SearchForm";
import MoviesCard from '../Movies/MoviesCard/MoviesCard'
import { useState } from 'react';

function SavedMovies({
  saveMovies,
  handleReceivingSaveMovies,
  handleClick,
  roundedVisibleCardCount,
  onShortMovies,
  setOnShortMovies,
  handleShortMovies,
  handleReceivingShortMyMovies,
  handleClickDelLike,
  isLoading,
  setIsLoading,
  errorSaveMovies,
  isInputSaveMovies,
  setIsInputSaveMovies
}) {

  const [textSearchSaveMovies, setTextSearchSaveMovies] = useState("")

  //поиск
  const filterNameFilm = textSearchSaveMovies ?
    saveMovies.filter((name) => {
      return ((name.nameEN.concat(name.nameRU)).toLowerCase())
        .includes(textSearchSaveMovies.toLowerCase())
    }) : saveMovies

  //получение короткометражных фильмов 
  const listMovies = !onShortMovies
    ?
    filterNameFilm.filter(
      ((item) => {
        return item.duration < "40"
      }))
    :
    filterNameFilm
  return (
    <>
      <SeachForm
        setIsLoading={setIsLoading}
        handleReceivingSaveMovies={handleReceivingSaveMovies}
        onShortMovies={onShortMovies}
        setOnShortMovies={setOnShortMovies}
        handleShortMovies={handleShortMovies}
        handleReceivingShortMovies={handleReceivingShortMyMovies}
        allMovies={saveMovies}
        setTextSearchSaveMovies={setTextSearchSaveMovies}
        isInputSaveMovies={isInputSaveMovies}
        setIsInputSaveMovies={setIsInputSaveMovies} />
      <MoviesCardList
        errorMovies={errorSaveMovies}
        isLoading={isLoading}
        listMovies={listMovies}
        handleClick={handleClick}>
        {listMovies?.slice(0, roundedVisibleCardCount).map((movie) => (
          <MoviesCard
            saveMovies={saveMovies}
            movie={movie}
            key={movie._id}
            handleClickDelLike={handleClickDelLike}
          />))}</MoviesCardList>
    </>
  );
}

export default SavedMovies;
