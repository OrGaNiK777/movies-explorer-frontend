import "./PageWithForm.css"

function PageWithForm({
  name,
  handleSubmit,
  title,
  nameBtn,
  children,
  alternative,
}) {
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
        <button className="access-page__button-submit" type="submit">
          {nameBtn}
        </button>
        <div className="access-page__alternative">
          {alternative}
        </div>
      </form>
    </section>
  );
}

export default PageWithForm
