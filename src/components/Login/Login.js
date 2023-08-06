import Input from "../Input/Input";
import PageWithForm from "../PageWithForm/PageWithForm"
import "./Login.css"


export default function Login({ isLoading }) {

  return (
    <>
      <PageWithForm
        title="Вход"
        name="add"
        nameBtn={isLoading ? "Вход..." : "Войти"}
        handleSubmit={""}
      >
        <Input
          useRef={""}
          type="email"
          classNameInput="access-page__input"
          classNameValid="popup__input-error popupInputTitle-error"
          placeholder="Email"
        ></Input>
        <Input
          useRef={""}
          type="text"
          classNameInput="access-page__input"
          classNameValid="popup__input-error popupInputTitle-error"
          placeholder="Пароль"
        ></Input>
      </PageWithForm>
    </>
  );
}
