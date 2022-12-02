import './Footer.scss'
import nycLogo from '../../assets/Logos/nyc-logo.png'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__links-container">
                <span className="footer__links">Directory of City Agencies</span>
                <span className="footer__links">Contact NYC Goverment</span>
                <span className="footer__links">City Employees</span>
                <span className="footer__links">Notify NYC</span>
                <span className="footer__links">CityStore</span>
                <span className="footer__links">Stay Connected</span>
                <span className="footer__links">NYC Mobile Apps</span>
                <span className="footer__links">Maps</span>
                <span className="footer__links">Resident Toolkit</span>
            </div>
            <div>
                <div className="footer__search-container">
                    <img className="nyc-logo" src={nycLogo} />
                    <input className="footer__search" placeholder="search"></input>
                </div>
                <p className="footer__copyright">City of New York. 2022 All Rights Reserved,NYC is a trademark and service mark of the City of New York
                </p>
                <p className="footer__copyright"><b>Privacy Policy. Terms of Use.</b></p>
            </div>
        </div>
    )
}

export { Footer };