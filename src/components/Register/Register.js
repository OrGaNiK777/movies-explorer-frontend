import { useRef } from 'react';
import Input from "../Input/Input";
import PageWithForm from "../PageWithForm/PageWithForm";
import { Link } from "react-router-dom";

export default function Register({ handleRegisterSubmit, isLoading }) {

  const inputEmailRef = useRef();
  const inputPassRef = useRef();
  const inputNameRef = useRef();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    handleRegisterSubmit(
      inputPassRef.current.value,
      inputEmailRef.current.value,
      inputNameRef.current.value
    );
  }

  const textValid = false
  const textValid1 = textValid ? textValid : "Проблем нет"
  const openValid = !textValid1 ? "access-page__mes-error access-page__mes-error_acvive" : "access-page__mes-error"

  return (
    <PageWithForm
      title="Добро пожаловать!"
      name="register"
      nameBtn={isLoading ? "Регистрация..." : "Зарегистрироваться"}
      handleSubmit={handleSubmit}
      alternative={
        <p className="access-page__alternative-text">
          Уже зарегистрированы?
          <Link
            className="access-page__alternative-link"
            to="/signin"
          >
            {" "}
            Войти
          </Link>
        </p>
      }
    >
      <Input
        useRef={inputNameRef}
        type="text"
        classNameInput="access-page__input"
        classNameValid={openValid}
        classNameInputСontent="access-page__input-content"
        InputСontent="Имя"
        TextValid={textValid1}
      ></Input>
      <Input
        useRef={inputEmailRef}
        type="text"
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
    </PageWithForm>
  );
}
