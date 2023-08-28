import './SearchForm.css'
import Input from '../../Input/Input'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({
  handleReceivingSaveMovies,
  handleReceivingMovies,
  isInputAllMovies,
  setIsInputAllMovies,
  onShortMovies,
  setOnShortMovies,
  handleShortMovies,
  setIsLoading,
  setTextSearchAllMovies,
  setTextSearchSaveMovies,
  isInputSaveMovies,
  setIsInputSaveMovies
}) {
  const location = useLocation()

  //поиск фильмов и залитие в гараж
  const handleSearchSubmit = (valueInput) => {
    if (location.pathname === '/movies') {
      valueInput
        ? localStorage.setItem('valueInputAllMovies', valueInput)
        : localStorage.removeItem('valueInputAllMovies');
    }
  }

  const valueInputAllMovies = localStorage.getItem('valueInputAllMovies') === null ?
    "" : localStorage.getItem('valueInputAllMovies')

  const [errorText, setErrorText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === '/movies') {
      if (/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInputAllMovies)) {
        setTextSearchAllMovies(valueInputAllMovies ? valueInputAllMovies : isInputAllMovies)
        handleReceivingMovies()
        setErrorText('');
        setIsLoading(true)
      } else {
        setErrorText('Нужно ввести ключевое слово');
      }
    }

    if (location.pathname === '/saved-movies') {
      if (/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(isInputSaveMovies)) {
        setTextSearchSaveMovies(isInputSaveMovies)
        setErrorText('');
        handleReceivingSaveMovies()
        setIsLoading(true)
      } else {
        setErrorText('Нужно ввести ключевое слово');
      }
    }
  };

  const handleInputChange = (e) => {
    if ((location.pathname === '/movies')) {
      handleSearchSubmit(e.target.value)
      setIsInputAllMovies(e.target.value)
    }
    if ((location.pathname === '/saved-movies')) {
      handleSearchSubmit(e.target.value)
      setIsInputSaveMovies(e.target.value)
    }
  };

  useEffect(() => {
    if (location.pathname === '/movies') {
      if (/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInputAllMovies)
        ? /[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInputAllMovies) : true) {
        setErrorText('')
        handleReceivingMovies()
        setIsLoading(true)
        setTextSearchAllMovies(valueInputAllMovies)
      }
    }
    if (location.pathname === '/saved-movies') {
      setErrorText('')
      handleReceivingSaveMovies()
      setIsLoading(true)
      setTextSearchSaveMovies("")
    }// eslint-disable-next-line
  }, [location])

  useEffect(() => {
    if (location.pathname === '/movies') {
      const checkboxStart = JSON.parse(localStorage.getItem('onShortMovies'))
      if (checkboxStart === false) { setOnShortMovies(false) }
      else { setOnShortMovies(true) }
    }
    if (location.pathname === '/saved-movies') {
      setOnShortMovies(true)
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <form className='searchForm' onSubmit={handleSubmit} noValidate>
        <Input
          type="text"
          classNameInput="searchForm__input"
          placeholder="Фильм"
          required
          TextValid={errorText}
          classNameValid={errorText ? "searchForm__mes-error searchForm__mes-error_acvive" : "searchForm__mes-error"}
          value={location.pathname === '/movies' ? valueInputAllMovies : isInputSaveMovies}
          onChange={handleInputChange}
        >
        </Input>
        <button className='searchForm__button-submit'></button>
      </form>
      <FilterCheckbox onShortMovies={onShortMovies} handleShortMovies={handleShortMovies}></FilterCheckbox>
    </>
  );
}

export default SearchForm;
