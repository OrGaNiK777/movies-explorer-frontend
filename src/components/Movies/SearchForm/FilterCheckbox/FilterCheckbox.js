import "./FilterCheckbox.css"

const FilterCheckbox = () => {
  const isOn = true
  return (
    <div className='filterCheckbox'>
      <input
        className="filterCheckbox__checkbox"
        id={`filterCheckbox__new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#06D6A0' }}
        className="filterCheckbox__label"
        htmlFor={`filterCheckbox__new`}
      >
        <span className={`filterCheckbox__button`} />
      </label>
      <p className='filterCheckbox__title'>Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
