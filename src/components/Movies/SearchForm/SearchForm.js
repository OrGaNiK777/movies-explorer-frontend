import './SearchForm.css'
import Input from '../../Input/Input'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {

  return (<>
    <form className='searchForm'>
      <Input
        type="text"
        classNameInput="searchForm__input"
        placeholder="Фильм"
      >
      </Input>
      <button className='searchForm__button-submit'></button>
    </form>
    <FilterCheckbox></FilterCheckbox>
  </>
  );
}

export default SearchForm;
