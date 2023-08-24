import MoviesCardList from './MoviesCardList/MoviesCardList';
import SeachForm from "./SearchForm/SearchForm";
import MoviesCard from './MoviesCard/MoviesCard'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  handleClickDelLike
}) {
  const location = useLocation()
  //получение короткометражных фильмов 
  const listMovies = !onShortMovies ? allMovies.filter(
    (function (item) {
      return item.duration < "53" //из википедии фильмы 52 минуты и меньше считаются короткометражными
    })) : allMovies

  const valueInput = localStorage.getItem('inputValue') === null ?
    "" : localStorage.getItem('inputValue')

  useEffect(() => {
    if (location.pathname === '/movies') {
      setAllMovies((JSON.parse(localStorage.getItem('allMovies')
        && !!valueInput)) ? JSON.parse(localStorage.getItem('allMovies')) : [])
    }// eslint-disable-next-line
  }, [])
  return (
    <>
      <SeachForm
        handleReceivingMovies={handleReceivingMovies}
        setInputValue={setInputValue}
        onShortMovies={onShortMovies}
        handleShortMovies={handleShortMovies}
        valueInput={valueInput}
      />
      <MoviesCardList
        listMovies={listMovies}
        handleClick={handleClick}
        handleSearchMovies={setInputValue}>
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
