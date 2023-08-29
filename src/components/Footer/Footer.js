import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__paragraph footer__paragraph_1'>Учебный проект</p>
      <div className='footer__container'>
        <p className='footer__paragraph footer__paragraph_2'>© 2023</p>
        <a className='footer__paragraph footer__paragraph_3' href='https://github.com/yandex-practicum' target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        <a className='footer__paragraph footer__paragraph_4' href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer">Github</a>
      </div>
    </footer>
  );
}

export default Footer;