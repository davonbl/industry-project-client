import './Header.scss';
import { NavLink } from 'react-router-dom';
import nycIcon from '../../assets/images/nyc-opportunity-logo.svg';
import burgerMenu from '../../assets/images/burger-menu.png';
import glassSearch from '../../assets/images/magnifying-glass.png';
import nycImage from '../../assets/images/nyc-logo.png';
import homeButton from '../../assets/images/home-button.png';
const Header = () => {

    return(
        <header className="header-top">
            <div className="header-top__banner">
                <div className="header-top__banner-left">
                    <img className="header-top__banner-left--img" src={nycImage}/>
                    <p className="header-top__banner-left--text">The Mayor's Office
                    for Economic Opportunity</p>
                </div>

                <div className="header-top__banner-right">
                    <p className="header-top__banner-right--number">311</p>
                    <p className="header-top__banner-right--text">Search all NYC.gov websites</p>
                </div>

            </div>
            <div className="header-top__nav">

                <div className="header-top__far-left">
                    <p className="header-top__far-left--text">The Mayor's Office
                    for Economic Opportunity</p>
                </div>

                <div className="header-top__center">
                    {/* <div className="header-top__left-side">
                        <img className='header-top__left-side--img' src={burgerMenu}/>
                    </div> */}
                    <div className="header-top__center">
                        <img className='header-top__center--img' src={nycIcon}/>
                    </div>
                    {/* <div className="header-top__right-side">
                        <img className='header-top__right-side--img' src={glassSearch}/>
                    </div> */}
                </div>

                <div className="header-top__far-right">
                    <div className="header-top__form">
                        <label className="header-top__label" htmlFor="category">Translate</label>
                        <select className='header-top__scrolling' name='language' id="language">                                    
                            <option value="Translate" selected></option>
                            <option value="Arabic">Arabic</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="Igbo">Igbo</option>
                            <option value="Chinese Madarin">Chinese Madarin</option>
                            <option value="Chinese Cantonese">Chinese cantonese</option>
                            <option value="Japanese">Japanese</option>
                        </select>
                    </div>

                    <div className="header-top__word-size">
                        <p className="header-top__text">Text-size</p>
                    </div>

                </div>

                
            </div>

            <div className="header-top__toc">
                <div className="header-top__toc-left">
                    <img className="header-top__toc-image" src={homeButton}/>
                </div>
                <div className="header-top__toc-center">
                    <ul className= "header-top__list">
                        <li className="header-top__click">About</li>
                        <li className="header-top__click header-top__click--wide">Poverty in NYC</li>
                        <li className="header-top__click header-top__click--wide">What We Do</li>
                        <li className="header-top__click">Portfolio</li>
                        <li className="header-top__click">Reports</li>
                        <li className="header-top__click">News</li>
                    </ul>
                </div>
                <div className="header-top__search-form">
                {/* <label className="" htmlFor="">Name</label> */}
                    <input id='item_name' className="__search-input" type="text" placeholder="Search"/>
                </div>
            </div>

        </header>
    )


}

export default Header;