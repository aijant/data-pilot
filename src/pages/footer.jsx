import './footer.scss'
import logo from '../assets/images/logo.svg'

function Footer() {
    return (
        <div className="footer">
            <div className='line'></div>
            <div><img src={logo} alt='logo' /></div>
            <div>
                <p>
                    Контакты для сайта:<br />
                    Telephone: +7(499) 673-499-5<br />
                    Email: info@data-pilot.ru <br/>
                </p>
            </div>
        </div>
    );
}

export default Footer;
