import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__paragraph footer__paragraph_1'>Учебный проект</p>
      <div className='footer__container'>
        <p className='footer__paragraph footer__paragraph_2'>© 2023</p>
        <p className='footer__paragraph footer__paragraph_3'>Яндекс.Практикум</p>
        <p className='footer__paragraph footer__paragraph_4'>Github</p>
      </div>
    </footer>
  );
}

export default Footer;