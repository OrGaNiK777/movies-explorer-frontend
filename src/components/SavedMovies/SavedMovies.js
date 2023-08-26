import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SeachForm from "../Movies/SearchForm/SearchForm";
import MoviesCard from '../Movies/MoviesCard/MoviesCard'
import { useState } from 'react';

function SavedMovies({
  saveMovies,
  allMovies,
  handleReceivingSaveMovies,
  handleClick,
  roundedVisibleCardCount,
  setInputValue,
  onShortMovies,
  handleShortMovies,
  handleReceivingShortMyMovies,
  handleClickDelLike,
  isLoading,
  setIsLoading,
  valueInput
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
        setInputValue={setInputValue}
        onShortMovies={onShortMovies}
        handleShortMovies={handleShortMovies}
        handleReceivingShortMovies={handleReceivingShortMyMovies}
        allMovies={saveMovies}
        setTextSearchSaveMovies={setTextSearchSaveMovies}
        valueInput={valueInput} />
      <MoviesCardList
        isLoading={isLoading}
        listMovies={listMovies}
        handleClick={handleClick}
        handleSearchMovies={setInputValue}
        valueInput={valueInput}>
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
