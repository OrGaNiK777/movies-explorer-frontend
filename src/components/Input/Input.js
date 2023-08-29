function Input({
  name,
  placeholder,
  value,
  maxLength,
  minLength,
  id,
  classNameInput,
  classNameValid,
  TextValid,
  type,
  useRef,
  classNameInputСontent,
  InputСontent,
  defaultValue,
  onChange,
  disabled
}) {

  return (
    <><p className={classNameInputСontent}>{InputСontent}</p>
      <input
        className={classNameInput}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
        maxLength={maxLength}
        minLength={minLength}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      <span className={classNameValid}>{TextValid}</span>
    </>
  );
}

export default Input;
