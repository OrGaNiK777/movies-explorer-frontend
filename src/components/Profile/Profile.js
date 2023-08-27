import "./Profile.css"
import Input from '../Input/Input'
import { useState, useContext, useEffect } from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormValid } from '../../hooks/useFormValid';


function Profile({ buttonExit, handleUpdateUser, isLoading, isSuccessUpdate, updateUserStatus }) {

  const {
    handleChange,
    errors,
    isValid,
    isValidName,
    isValidEmail,
    values,
    setValues,
    resetForm,
    setIsValidName,
    setIsValidEmail,
    setIsValid,

  } = useFormValid();


  const [enableButton, setEnableButton] = useState(false)


  function toggleButton() {
    setEnableButton(true)
  }

  const { name, email } = useContext(CurrentUserContext)

  function handleSubmit(event) {
    event.preventDefault();
    handleUpdateUser(values.name, values.email);
  }
  useEffect(() => {
    resetForm();
    setValues({
      name,
      email,
    })
    if (isSuccessUpdate) {
      setEnableButton(false)
    }
    // eslint-disable-next-line
  }, [setValues, resetForm, handleUpdateUser]);

  useEffect(() => {
    if (isSuccessUpdate) {
      setEnableButton(false)
    }
    // eslint-disable-next-line
  }, [handleUpdateUser]);

  useEffect(() => {
    if (values.email === email && isValidName === true) {
      setIsValidEmail(true);
      setIsValid(true)
    }

    if (values.name === name && isValidEmail === true) {
      setIsValidName(true);
      setIsValid(true)
    }

    if (values.name === name && values.email === email) {
      setIsValidEmail(false);
      setIsValidName(false);
      setIsValid(false);
    }
    // eslint-disable-next-line
  }, [isValidName, isValidEmail, values, handleUpdateUser, setIsValid]);

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет${name ? ", " + name : ""}!`}</h2>
      <form
        className="profile__form"
        name="profileForm"
        onSubmit={handleSubmit}
      >
        <div className='profile__input-element'>
          <p className='profile__field'>Имя</p>
          <Input
            id="name"
            type="text"
            name='name'
            classNameInput={errors.name ? "profile__input profile__input_error" : "profile__input"}
            placeholder={name}
            minLength="2"
            maxLength="30"
            value={values.name || ''}
            onChange={handleChange}
            disabled={!enableButton}
          />
        </div>
        <p className='profile__line'></p>
        <div className='profile__input-element'>
          <p className='profile__field'>E-mail</p>
          <Input
            id='email'
            type="email"
            name='email'
            classNameInput={errors.email ? "profile__input profile__input_error" : "profile__input"}
            placeholder={email}
            value={values.email || ''}
            onChange={handleChange}
            disabled={!enableButton}
          />
        </div>
        <span className={errors.email || errors.name ? "profile__mes-error" : isSuccessUpdate ? "profile__mes-error profile__mes_good" : "profile__mes-error"}>
          {errors.name ? errors.name : errors.email ? errors.email : updateUserStatus}
        </span>
        {!enableButton
          ? <div className={`profile__behaviour`}>
            <p className='profile__edit' onClick={() => { toggleButton() }}>Редактировать</p>
            <p className='profile__signout' onClick={buttonExit}>Выйти из аккаунта</p>
          </div >
          : <button className={
            isValid === false || isValidName === false || isValidEmail === false || isLoading
              ? "profile__button-submit profile__button-submit_disabled"
              : "profile__button-submit"}
            type="submit"
            onClick={handleSubmit}
            disabled={isValid === false || isValidName === false || isValidEmail === false || isLoading}>
            {isLoading ? "Сохранение..." : "Сохранить"}
          </button >}
      </form>
    </section >
  )
}

export default Profile