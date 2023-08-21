import "./Profile.css"
import Input from '../Input/Input'
import { useState, useContext, useRef } from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContext';


function Profile({ buttonExit, handleUpdateUser }) {

  const [isEditInput, setEditInput] = useState(false);

  function toggleEditInput() {
    setEditInput(!isEditInput)
  }

  const currentUser = useContext(CurrentUserContext)
  console.log(currentUser.email)

  const error = false

  const [isEdit, setEdit] = useState(true);

  function toggleEdit() {
    setEdit(!isEdit)
  }

  const inputNameRef = useRef();
  const inputEmailRef = useRef();

  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    handleUpdateUser(
      inputNameRef.current.value,
      inputEmailRef.current.value,
    );
  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет${currentUser.name ? ", " + currentUser.name : ""}!`}</h2>
      <form
        className="profile__form"
        name="profileForm"
        noValidate
        onSubmit={handleSubmit}
      ><div className='profile__input-element'>
          <p className='profile__field'>Имя</p>
          <Input
            useRef={inputNameRef}
            type="text"
            classNameInput={isEditInput ? "profile__input profile__input_active" : "profile__input"}
            classNameValid={error ? "profile__mes-error profile__mes-error_acvive" : "profile__mes-error"}
            placeholder={currentUser.name}
            TextValid={error ? "Есть проблема" : "Проблем нет"}
          ></Input>
        </div>
        <p className='profile__line'></p>
        <div className='profile__input-element'>
          <p className='profile__field'>E-mail</p>
          <Input
            useRef={inputEmailRef}
            type="email"
            classNameInput={isEditInput ? "profile__input profile__input_active" : "profile__input"}
            classNameValid={error ? "profile__mes-error profile__mes-error_acvive" : "profile__mes-error"}
            placeholder={currentUser.email}
            TextValid={error ? "Есть проблема" : "Проблем нет"}
          ></Input>
        </div>
        {isEdit
          ? <div className={`profile__behaviour`}>
            <p className='profile__edit' onClick={() => { toggleEdit(); toggleEditInput() }}>Редактировать</p>
            <a className='profile__signout' href='/' onClick={buttonExit}>Выйти из аккаунта</a>
          </div >
          : <button className={`profile__button-submit`} type="submit" onClick={handleSubmit} >
            Сохранить
          </button >}
      </form>
    </section>
  )
}

export default Profile