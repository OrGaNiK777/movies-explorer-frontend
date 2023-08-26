import Input from "../Input/Input";
import PageWithForm from "../PageWithForm/PageWithForm";
import { Link } from "react-router-dom";
import { useFormValid } from '../../hooks/useFormValid';

export default function Register({ handleRegisterSubmit, isLoading, updateRegisterStatus }) {

  const {
    handleChange,
    values,
    errors,
    isValid,
    isValidEmail,
    isValidName

  } = useFormValid();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    handleRegisterSubmit(
      values.email,
      values.password,
      values.name
    );
  }

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
      statusBtn={isValid === false || isValidName === false || isValidEmail === false || isLoading}
      disabled={isValid === false || isValidName === false || isValidEmail === false || isLoading}
    >
      <Input
        id="name"
        type="text"
        name='name'
        minLength="2"
        maxLength="30"
        classNameInput={errors.name ? "access-page__input access-page__input_error" : "access-page__input"}
        classNameValid={errors.name ? "access-page__mes-error access-page__mes-error_acvive" : "access-page__mes-error"}
        classNameInputСontent="access-page__input-content"
        InputСontent="Имя"
        TextValid={errors.name}
        onChange={handleChange}
        placeholder=""
      ></Input>
      <Input
        id="email"
        type="email"
        name='email'
        classNameInput={errors.email ? "access-page__input access-page__input_error" : "access-page__input"}
        classNameValid={errors.email ? "access-page__mes-error access-page__mes-error_acvive" : "access-page__mes-error"}
        classNameInputСontent="access-page__input-content"
        InputСontent="E-mail"
        TextValid={errors.email}
        onChange={handleChange}
        placeholder="index@mail.ru"
      ></Input>
      <Input
        id="password"
        type="password"
        name="password"
        minLength="8"
        classNameInput={errors.password ? "access-page__input access-page__input_error" : "access-page__input"}
        classNameValid={errors.password || updateRegisterStatus ? "access-page__mes-error access-page__mes-error_acvive" : "access-page__mes-error"}
        classNameInputСontent="access-page__input-content"
        InputСontent="Пароль"
        TextValid={errors.password ? errors.password : updateRegisterStatus}
        onChange={handleChange}
        placeholder="Введите пароль"
      ></Input>
    </PageWithForm>
  );
}
