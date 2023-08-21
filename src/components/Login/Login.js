import { useRef } from 'react';
import Input from "../Input/Input";
import PageWithForm from "../PageWithForm/PageWithForm"
import { Link } from 'react-router-dom';


export default function Login({ isLoading, handleLoginSubmit }) {
  const textValid = false
  const textValid1 = textValid ? textValid : "Проблем нет"
  const openValid = !textValid1 ? "access-page__mes-error access-page__mes-error_acvive" : "access-page__mes-error"

  const inputEmailRef = useRef();
  const inputPassRef = useRef();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    handleLoginSubmit(
      inputPassRef.current.value,
      inputEmailRef.current.value
    );
  }
  return (
    <>
      <PageWithForm
        title="Рады видеть!"
        name="login"
        nameBtn={isLoading ? "Вход..." : "Войти"}
        handleSubmit={handleSubmit}
        alternative={
          <p className="access-page__alternative-text">
            Ещё не зарегистрированы?
            <Link
              className="access-page__alternative-link"
              to="/signup"
            >
              {" "}
              Регистрация
            </Link>
          </p>
        }
      >
        <Input
        useRef={inputEmailRef}
          type="email"
          classNameInput="access-page__input"
          classNameValid={openValid}
          classNameInputСontent="access-page__input-content"
          InputСontent="E-mail"
          TextValid={textValid1}
        ></Input>
        <Input
        useRef={inputPassRef}
          type="text"
          classNameInput="access-page__input"
          classNameValid={openValid}
          classNameInputСontent="access-page__input-content"
          InputСontent="Пароль"
          TextValid={textValid1}
        ></Input>
      </PageWithForm >
    </>
  );
}
