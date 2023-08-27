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
  onShortMovies,
  handleShortMovies,
  handleClickLike,
  handleClickDelLike,
  isLoading,
  setIsLoading,
  errorAllMovies
}) {

  const [textSearchAllMovies, setTextSearchAllMovies] = useState("")

  //поиск
  const filterNameFilm = textSearchAllMovies ?
    allMovies.filter(((name) => {
      return !(name.nameRU && name.nameEN)
        .toLowerCase().replace(/ /g, "")
        .indexOf(textSearchAllMovies.toLowerCase().replace(/ /g, ""))
    })) : []

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
        handleReceivingMovies={handleReceivingMovies}
        onShortMovies={onShortMovies}
        handleShortMovies={handleShortMovies}
        setTextSearchAllMovies={setTextSearchAllMovies}
        setAllMovies={setAllMovies} />
      <MoviesCardList
        errorMovies={errorAllMovies}
        isLoading={isLoading}
        listMovies={listMovies}
        handleClick={handleClick}>
        {listMovies?.slice(0, roundedVisibleCardCount).map((movie) => (
          <MoviesCard
            saveMovies={saveMovies}
            movie={movie}
            key={movie.id}
            handleClickLike={handleClickLike}
            handleClickDelLike={handleClickDelLike}
          />))}</MoviesCardList>
    </>
  );
}

export default Movies;
