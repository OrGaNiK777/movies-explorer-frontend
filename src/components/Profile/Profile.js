import "./Profile.css"
import Input from '../Input/Input'


function Profile({ handleSubmit }) {
  const textValid = false
  const textValid1 = textValid ? textValid : "Проблем нет"
  const openValid = !textValid1 ? "profile__mes-error profile__mes-error_acvive" : "profile__mes-error"
  const authName = 'Виталий'
  const authEmail = "pochta@yandex.ru"
  var visibility = true;
  function render() {
    if (visibility) {
      visibility = false;
    }
  }
  const edit =
    visibility
      ?
      <div className='profile__behaviour'>
        <a className='profile__edit' href='#' onClick={() => render()}>Редактировать</a>
        <a className='profile__signout' href='/signout'>Выйти из аккаунта</a>
      </div>
      :
      <button className="profile__button-submit" type="submit">
        Сохранить
      </button>
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
            classNameInput="profile__input"
            classNameValid={openValid}
            placeholder={authName}
            TextValid={textValid1}
          ></Input>
        </div>
        <line className='profile__line'></line>
        <div className='profile__input-element'>
          <p className='profile__field'>E-mail</p>
          <Input
            type="email"
            classNameInput="profile__input"
            classNameValid={openValid}
            placeholder={authEmail}
            TextValid={textValid1}
          ></Input>
        </div>
        {edit}
      </form>

    </section>
  )
}

export default Profile