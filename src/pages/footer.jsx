import './footer.scss'
import logo from '../assets/images/logo.svg'

function Footer() {
    return (
        <div className="footer">
            <div className='line'></div>
            <div><img src={logo} alt='logo' /></div>
            <div>
                <p>
                    Al Mamoura A Building,<br />
                    Abu Dhabi, United Arab Emirates<br />
                    P.O. Box 45005<br />
                    Telephone: +7(499) 673-499-5<br />
                    Email: info@data-pilot.ru <br/>
                    Fax: +971 2413 2023
                </p>
            </div>
        </div>
    );
}

export default Footer;
