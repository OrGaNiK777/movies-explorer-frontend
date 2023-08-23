import './SearchForm.css'
import Input from '../../Input/Input'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm({
  handleReceivingMovies,
  setInputValue,
  onShortMovies,
  handleShortMovies,
  valueInput

}) {

  //поиск фильмов и залитие в гараж
  const handleSearchSubmit = (valueInput) => {
    localStorage.setItem('inputValue', valueInput);
  }

  const [errorText, setErrorText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(valueInput)) {
      setErrorText('');
      handleReceivingMovies()

    } else {
      setErrorText('Нужно ввести ключевое слово');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleSearchSubmit(e.target.value)
  };

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
      <FilterCheckbox onShortMovies={onShortMovies} handleShortMovies={handleShortMovies}></FilterCheckbox>
    </>
  );
}

export default SearchForm;
