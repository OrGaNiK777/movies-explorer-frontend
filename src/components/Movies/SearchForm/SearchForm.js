import './SearchForm.css'
import Input from '../../Input/Input'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';

function SearchForm({ handleReceivingMovies, setInputValue }) {

  //поиск фильмов и запить в гараж
  const handleSearchSubmit = (valueInput) => {
    localStorage.setItem('inputValue', valueInput);
  }

  const valueInput = localStorage.getItem('inputValue')

  const [errorText, setErrorText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInput)) {
      setErrorText('');
      handleReceivingMovies();
    } else {
      setErrorText('Нужно ввести ключевое слово');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleSearchSubmit(e.target.value)
  };

  useEffect(() => {
    if (/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInput)) {
      setErrorText('');
      handleReceivingMovies();
    }
  }, [])

  return (
    <>
      <form className='searchForm' onSubmit={handleSubmit}>
        <Input
          type="text"
          classNameInput="searchForm__input"
          placeholder="Фильм"
          required
          TextValid={errorText}
          classNameValid={errorText ? "searchForm__mes-error searchForm__mes-error_acvive" : "searchForm__mes-error"}
          value={valueInput}
          handleChange={handleInputChange}
        >
        </Input>
        <button className='searchForm__button-submit'></button>
      </form>
      <FilterCheckbox></FilterCheckbox>
    </>
  );
}

export default SearchForm;
