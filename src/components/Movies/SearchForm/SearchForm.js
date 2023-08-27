import './SearchForm.css'
import Input from '../../Input/Input'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({
  handleReceivingSaveMovies,
  handleReceivingMovies,
  setInputValueAllMovies,
  setInputValueSaveMovies,
  onShortMovies,
  handleShortMovies,
  setIsLoading,
  setTextSearchAllMovies,
  setTextSearchSaveMovies
}) {
  const location = useLocation()

  //поиск фильмов и залитие в гараж
  const handleSearchSubmit = (valueInput) => {
    if (location.pathname === '/movies') {
      valueInput
        ? localStorage.setItem('valueInputAllMovies', valueInput)
        : localStorage.removeItem('valueInputAllMovies');
    }
    if (location.pathname === '/saved-movies') {
      valueInput
        ? localStorage.setItem('valueInputSaveMovies', valueInput)
        : localStorage.removeItem('valueInputSaveMovies');
    }
  }

  const valueInputAllMovies = localStorage.getItem('valueInputAllMovies') === null ?
    "" : localStorage.getItem('valueInputAllMovies')

  const valueInputSaveMovies = localStorage.getItem('valueInputSaveMovies') === null ?
    "" : localStorage.getItem('valueInputSaveMovies')

  const [errorText, setErrorText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === '/movies') {
      if (/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInputAllMovies)) {
        setTextSearchAllMovies(valueInputAllMovies)
        setErrorText('');
        handleReceivingMovies()
        setIsLoading(true)
      } else {
        setErrorText('Нужно ввести ключевое слово');
      }
    }

    if (location.pathname === '/saved-movies') {
      if (/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInputSaveMovies)) {
        setTextSearchSaveMovies(valueInputSaveMovies)
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
      setInputValueAllMovies(e.target.value);
      handleSearchSubmit(e.target.value)
    }
    if ((location.pathname === '/saved-movies')) {
      setInputValueSaveMovies(e.target.value);
      handleSearchSubmit(e.target.value)
    }
  };

  useEffect(() => {
    if (location.pathname === '/movies') {
      if (/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInputAllMovies)) {
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
      setTextSearchSaveMovies(valueInputSaveMovies)
    }// eslint-disable-next-line
  }, [location])

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
          defaultValue={location.pathname === '/movies' ? valueInputAllMovies : valueInputSaveMovies}
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
