import Input from "../Input/Input";
import PageWithForm from "../PageWithForm/PageWithForm"
import { Link } from 'react-router-dom';


export default function Login({ isLoading }) {
  const textValid = false
  const textValid1 = textValid ? textValid : "Проблем нет"
  const openValid = !textValid1 ? "access-page__mes-error access-page__mes-error_acvive" : "access-page__mes-error"
  return (
    <>
      <PageWithForm
        title="Рады видеть!"
        name="add"
        nameBtn={isLoading ? "Вход..." : "Войти"}
        alternative={
          <p className="access-page__alternative-text">
            Ещё не зарегистрированы?
            <Link
              className="access-page__alternative-text"
              style={{ color: "#4285F4", textDecoration: "none" }}
              to="/signup"

            >
              {" "}
              Регистрация
            </Link>
          </p>
        }
      >
        <Input
          type="email"
          classNameInput="access-page__input"
          classNameValid={openValid}
          classNameInputСontent="access-page__input-content"
          InputСontent="E-mail"
          TextValid={textValid1}
        ></Input>
        <Input
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
