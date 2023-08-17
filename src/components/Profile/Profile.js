import "./Profile.css"
import Input from '../Input/Input'
import { useState } from 'react'


function Profile({ handleSubmit }) {

  const [isEditInput, setEditInput] = useState(false);

  function toggleEditInput() {
    setEditInput(!isEditInput)
  }

  const error = false
  const openValid = error ? "profile__mes-error profile__mes-error_acvive" : "profile__mes-error"
  const textError = error ? "Есть проблема" : "Проблем нет"

  const [isEdit, setEdit] = useState(true);

  function toggleEdit() {
    setEdit(!isEdit)
  }

  function modeEdit() {
    return (
      isEdit
        ? <div className={`profile__behaviour`}>
          <p className='profile__edit' onClick={() => { toggleEdit(); toggleEditInput() }}>Редактировать</p>
          <a className='profile__signout' href='/signout'>Выйти из аккаунта</a>
        </div >
        : <button className={`profile__button-submit`} type="submit" >
          Сохранить
        </button >
    );
  }

  const authName = 'Виталий'
  const authEmail = "pochta@yandex.ru"

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${authName}!`}</h2>
      <form
        className="profile__form"
        name="profileForm"
        noValidate
        onSubmit={handleSubmit}
      ><div className='profile__input-element'>
          <p className='profile__field'>Имя</p>
          <Input
            type="text"
            classNameInput={isEditInput ? "profile__input profile__input_active" : "profile__input"}
            classNameValid={openValid}
            placeholder={authName}
            TextValid={textError}
          ></Input>
        </div>
        <p className='profile__line'></p>
        <div className='profile__input-element'>
          <p className='profile__field'>E-mail</p>
          <Input
            type="email"
            classNameInput={isEditInput ? "profile__input profile__input_active" : "profile__input"}
            classNameValid={openValid}
            placeholder={authEmail}
            TextValid={textError}
          ></Input>
        </div>
        {modeEdit()}
      </form>
    </section>
  )
}

export default Profile