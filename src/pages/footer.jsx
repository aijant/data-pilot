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
                     +7(499) 673-499-5<br />
                     info@data-pilot.ru <br/>
                </p>
            </div>
        </div>
    );
}

export default Footer;
