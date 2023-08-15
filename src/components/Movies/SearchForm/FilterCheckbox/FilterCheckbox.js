import "./FilterCheckbox.css"

const FilterCheckbox = () => {
  const isOn = true
  return (
    <div className='filterCheckbox'>
      <input
        className="filterCheckbox-checkbox"
        id={`filterCheckbox-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#06D6A0' }}
        className="filterCheckbox-label"
        htmlFor={`filterCheckbox-new`}
      >
        <span className={`filterCheckbox-button`} />
      </label>
      <p className='filterCheckbox__title'>Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
