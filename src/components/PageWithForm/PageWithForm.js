import "./PageWithForm.css"

function PageWithForm({
  name,
  handleSubmit,
  title,
  nameBtn,
  children,
  alternative,
  statusBtn,
  disabled
}) {
  console.log(statusBtn)
  console.log(disabled)
  return (
    <section className="access-page">
      <h2 className="access-page__title">{title}</h2>
      <form
        className="access-page__form"
        name={`${name}Form`}
        noValidate
        onSubmit={handleSubmit}
      >
        {children}
        <button
          className={statusBtn ? "access-page__button-submit  access-page__button-submit_disabled" : "access-page__button-submit"}
          type="submit"
          disabled={disabled}>
          {nameBtn}
        </button>
        <div className="access-page__alternative"
        >
          {alternative}
        </div>
      </form>
    </section>
  );
}

export default PageWithForm
