import './SearchForm.css'
import Input from '../../Input/Input'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({
  handleReceivingSaveMovies,
  handleReceivingMovies,
  setInputValue,
  onShortMovies,
  handleShortMovies,
  setIsLoading,
  setTextSearchAllMovies,
  setTextSearchSaveMovies,
  valueInput
}) {
  const location = useLocation()

  //поиск фильмов и залитие в гараж
  const handleSearchSubmit = (valueInput) => {
    valueInput
      ? localStorage.setItem('inputValue', valueInput)
      : localStorage.removeItem('inputValue');
  }

  const [errorText, setErrorText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location.pathname === '/movies') {
      if (valueInput ? /[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInput) : "") {
        setErrorText('');
        handleReceivingMovies()
        setIsLoading(true)
        setTextSearchAllMovies(valueInput)

      } else {
        setErrorText('Нужно ввести ключевое слово');
      }
    }

    if (location.pathname === '/saved-movies') {
      if (valueInput ? /[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInput) : "") {
        setErrorText('');
        handleReceivingSaveMovies()
        setIsLoading(true)
        setTextSearchSaveMovies(valueInput)

      } else {
        setErrorText('Нужно ввести ключевое слово');
      }
    }

  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleSearchSubmit(e.target.value)
  };

  useEffect(() => {
    if (location.pathname === '/movies') {
      if (valueInput ? /[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInput) : "") {
        setErrorText('')
        handleReceivingMovies()
        setIsLoading(true)
        setTextSearchAllMovies(valueInput)
      }
    }
    if (location.pathname === '/saved-movies') {
      setErrorText('')
      handleReceivingSaveMovies()
      setIsLoading(true)
      setTextSearchSaveMovies(valueInput)
    }// eslint-disable-next-line
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
          value={valueInput}
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
