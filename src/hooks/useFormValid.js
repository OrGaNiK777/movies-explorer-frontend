import { useCallback, useState } from 'react';

export function useFormValid() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    setValues({ ...values, [name]: value });
    setIsValid(target.closest('form').checkValidity());

    if (name === 'name') {
      const regexName = /^\s*$|^[A-Za-zА-Яа-яЁё\s-]+$/;
      const isValidFormatName = regexName.test(value);
      const minLength = 2;

      if (isValidFormatName === false) {
        setErrors({ ...errors, [name]: 'Неверный формат имени' });
        setIsValidName(false);
      } else if (value.length < minLength) {
        setErrors({ ...errors, [name]: 'Минимум 2 символа' });
        setIsValidName(false);
      } else if (value.length < minLength) {
        setErrors({ ...errors, [name]: 'Введите ключевое слово' });
        setIsValidName(false);
      } else {
        setErrors({ ...errors, [name]: '' });
        setIsValidName(true);
      }
    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
    }

    if (name === 'email') {
      const isValidFormatEmail =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value);

      if (isValidFormatEmail === false) {
        setErrors({ ...errors, [name]: 'Формат почты index@mail.ru' });
        setIsValidEmail(false);
      } else {
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValidEmail(true);
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    handleChange,
    errors,
    setErrors,
    isValid,
    resetForm,
    isValidName,
    isValidEmail,
    setValues,
    setIsValidName,
    setIsValidEmail,
    setIsValid,
  };
}
