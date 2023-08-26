import MoviesCardList from './MoviesCardList/MoviesCardList';
import SeachForm from "./SearchForm/SearchForm";
import MoviesCard from './MoviesCard/MoviesCard'
import { useState } from 'react';

function Movies({
  saveMovies,
  allMovies,
  setAllMovies,
  handleReceivingMovies,
  handleClick,
  roundedVisibleCardCount,
  setInputValue,
  onShortMovies,
  handleShortMovies,
  handleClickLike,
  handleClickDelLike,
  isLoading,
  setIsLoading,
  valueInput
}) {

  const [textSearchAllMovies, setTextSearchAllMovies] = useState("")

  const filterNameFilm = textSearchAllMovies ?
    allMovies.filter(((name) => {
      return !(name.nameRU && name.nameEN)
        .toLowerCase().replace(/ /g, "")
        .indexOf(textSearchAllMovies.toLowerCase().replace(/ /g, ""))
    })) : []

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
        handleReceivingMovies={handleReceivingMovies}
        setInputValue={setInputValue}
        onShortMovies={onShortMovies}
        handleShortMovies={handleShortMovies}
        setTextSearchAllMovies={setTextSearchAllMovies}
        setAllMovies={setAllMovies}
        valueInput={valueInput}
      />
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
            key={movie.id}
            handleClickLike={handleClickLike}
            handleClickDelLike={handleClickDelLike}
            valueInput={valueInput}
          />))}</MoviesCardList>
    </>
  );
}

export default Movies;
