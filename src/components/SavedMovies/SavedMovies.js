import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SeachForm from "../Movies/SearchForm/SearchForm";
import MoviesCard from '../Movies/MoviesCard/MoviesCard'
import { useState } from 'react';

function SavedMovies({
  saveMovies,
  handleReceivingSaveMovies,
  handleClick,
  roundedVisibleCardCount,
  inputValueSaveMovies,
  setInputValueSaveMovies,
  onShortMovies,
  handleShortMovies,
  handleReceivingShortMyMovies,
  handleClickDelLike,
  isLoading,
  setIsLoading,
  errorSaveMovies
}) {

  const [textSearchSaveMovies, setTextSearchSaveMovies] = useState("")

  //поиск
  const filterNameFilm = textSearchSaveMovies ?
    saveMovies.filter(((name) => {
      return !(name.nameRU && name.nameEN)
        .toLowerCase().replace(/ /g, "")
        .indexOf(textSearchSaveMovies.toLowerCase().replace(/ /g, ""))
    })) : saveMovies
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
        handleReceivingMovies={handleReceivingSaveMovies}
        handleReceivingSaveMovies={handleReceivingSaveMovies}
        inputValueSaveMovies={inputValueSaveMovies}
        setInputValueSaveMovies={setInputValueSaveMovies}
        onShortMovies={onShortMovies}
        handleShortMovies={handleShortMovies}
        handleReceivingShortMovies={handleReceivingShortMyMovies}
        allMovies={saveMovies}
        setTextSearchSaveMovies={setTextSearchSaveMovies} />
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
