import Input from "../Input/Input";
import PageWithForm from "../PageWithForm/PageWithForm"
import { Link } from 'react-router-dom';
import { useFormValid } from '../../hooks/useFormValid';

export default function Login({ isLoading, handleLoginSubmit, updateLoginStatus }) {

  const {
    handleChange,
    values,
    errors,
    isValid,
    isValidEmail

  } = useFormValid();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    handleLoginSubmit(
      values.email,
      values.password);
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
        statusBtn={isValid === false || isValidEmail === false || isLoading}
        disabled={isValid === false || isValidEmail === false || isLoading}
      >
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
          classNameValid={errors.password || updateLoginStatus ? "access-page__mes-error access-page__mes-error_acvive" : "access-page__mes-error"}
          classNameInputСontent="access-page__input-content"
          InputСontent="Пароль"
          TextValid={errors.password ? errors.password : updateLoginStatus}
          onChange={handleChange}
          placeholder="Введите пароль"
        ></Input>
      </PageWithForm >
    </>
  );
}
