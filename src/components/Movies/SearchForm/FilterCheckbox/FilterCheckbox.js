import "./FilterCheckbox.css"

const FilterCheckbox = ({ onShortMovies, handleShortMovies }) => {

  return (
    <div className='filterCheckbox'>
      <input
        className="filterCheckbox__checkbox"
        id='filterCheckbox__new'
        type="checkbox"
        checked={onShortMovies}
        onChange={handleShortMovies}
      />
      <label
        style={{ background: !onShortMovies && '#06D6A0' }}
        className="filterCheckbox__label"
        htmlFor='filterCheckbox__new'
      >
        <span className='filterCheckbox__button' />
      </label>
      <p className='filterCheckbox__title'>Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
