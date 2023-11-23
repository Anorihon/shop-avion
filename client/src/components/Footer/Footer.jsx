import React from 'react'
import './Footer.scss'
import logoLinkedin from './img/Logo--linkedin.png'
import logoFacebook from './img/Logo--facebook.png'
import logoInstagram from './img/Logo--instagram.png'
import logoSkype from './img/Logo--skype.png'
import logoTwitter from './img/Logo--twitter.png'
import logoPinterest from './img/Logo--pinterest.png'
import {NavLink} from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content-mobile">
                <div className="footer__left">
                    <div className="footer__avion">
                        <p className="footer__avion-text">Avion</p>
                    </div>
                    <div className="footer__address">
                        <p className="footer__address-line">21 New York Street</p>
                        <p className="footer__address-line">New York City</p>
                        <p className="footer__address-line">United States of America</p>
                        <p className="footer__address-line">432 34</p>
                    </div>
                    <div className="footer__company">
                        <p className="footer__company-heading">Our company</p>
                        <ul className="footer__company-list">
                            <NavLink className="footer__company-list" to="/about-us">
                                About us
                            </NavLink>
                            <NavLink className="footer__company-list" to="/privacy-page">
                                Privacy page
                            </NavLink>
                            <li>Vacancies</li>
                            <NavLink className="footer__company-list" to="/contacts/">
                                Contact us
                            </NavLink>
                            <li>Returns policy</li>
                        </ul>
                    </div>
                </div>

                <div className="footer__right">
                    <div className="footer__social">
                        <p className="footer__social-text">Social links</p>
                    </div>
                    <div className="footer__tagSocial">
                        <div className="footer__row">
                            <img
                                className="footer__tagSocial-line"
                                src={logoLinkedin}
                                alt="Linkedin"
                            />
                            <img
                                className="footer__tagSocial-line"
                                src={logoFacebook}
                                alt="Facebook"
                            />
                            <img
                                className="footer__tagSocial-line"
                                src={logoInstagram}
                                alt="Instagram"
                            />
                        </div>
                        <div className="footer__row">
                            <img
                                className="footer__tagSocial-line"
                                src={logoSkype}
                                alt="Skype"
                            />
                            <img
                                className="footer__tagSocial-line"
                                src={logoTwitter}
                                alt="Twitter"
                            />
                            <img
                                className="footer__tagSocial-line"
                                src={logoPinterest}
                                alt="Pinterest"
                            />
                        </div>
                    </div>

                    <div className="footer__menu">
                        <p className="footer__menu-heading">Menu</p>
                        <ul className="footer__menu-list">
                            <NavLink className="footer__menu-line" to="/All-products/">
                                All products
                            </NavLink>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Popular this week</li>
                        </ul>
                    </div>
                </div>

                <div className="footer__line-container">
                    <div className="footer__line"></div>
                    <div className="footer__copyright">Copyright 2022 Avion LTD</div>
                </div>
            </div>

            <div className="footer__content-desktop">
                <div className="footer__address">
                    <p className="footer__address-heading">Avion</p>
                    <p className="footer__address-line">21 New York Street</p>
                    <p className="footer__address-line">New York City</p>
                    <p className="footer__address-line">United States of America</p>
                    <p className="footer__address-line">432 34</p>
                    <p className="footer__copyright">Copyright 2022 Avion LTD</p>
                </div>

                <div className="footer__social">
                    <p className="footer__social-heading">Social links</p>
                    <div className="footer__row">
                        <img
                            className="footer__social-line"
                            src={logoLinkedin}
                            alt="Linkedin"
                        />
                        <img
                            className="footer__social-line"
                            src={logoFacebook}
                            alt="Facebook"
                        />
                        <img
                            className="footer__social-line"
                            src={logoInstagram}
                            alt="Instagram"
                        />
                        <img className="footer__social-line" src={logoSkype} alt="Skype"/>
                        <img
                            className="footer__social-line"
                            src={logoTwitter}
                            alt="Twitter"
                        />
                        <img
                            className="footer__social-line"
                            src={logoPinterest}
                            alt="Pinterest"
                        />
                    </div>
                </div>

                <div className="footer__menu">
                    <p className="footer__menu-heading">Menu</p>
                    <NavLink className="footer__menu-line" to="/All-products/">
                        All products
                    </NavLink>
                    <p className="footer__menu-line">New arrivals</p>
                    <p className="footer__menu-line">Best sellers</p>
                    <p className="footer__menu-line">Recently viewed</p>
                    <p className="footer__menu-line">Popular this week</p>
                    <p className="footer__menu-line">Somethings</p>
                </div>

                <div className="footer__categories">
                    <p className="footer__categories-heading">Categories</p>
                    <NavLink className="footer__menu-line" to="/category/cutlery/">
                        Cutlery
                    </NavLink>
                    <NavLink className="footer__menu-line" to="/category/Nightstand/">
                        Nightstands
                    </NavLink>
                    <NavLink className="footer__menu-line" to="/category/Crockery/">
                        Crockery
                    </NavLink>
                    <NavLink className="footer__menu-line" to="/category/Chairs/">
                        Chairs
                    </NavLink>
                    <NavLink className="footer__menu-line" to="/category/Tables/">
                        Tables
                    </NavLink>
                    <NavLink className="footer__menu-line" to="/category/Ceramics/">
                        Ceramisc
                    </NavLink>
                </div>

                <div className="footer__company">
                    <p className="footer__company-heading">Our company</p>
                    <NavLink className="footer__company-line" to="/about-us">
                        About us
                    </NavLink>
                    <NavLink className="footer__company-line" to="/privacy-page">
                        Privacy page
                    </NavLink>
                    <p className="footer__company-line">Vacancies</p>
                    <NavLink className="footer__company-line" to="/contacts/">
                        Contact us
                    </NavLink>
                    <p className="footer__company-line">Returns policy</p>
                    <p className="footer__company-line">News</p>
                </div>

                <div className="footer__line-container">
                    <div className="footer__line"></div>
                </div>
            </div>
        </footer>
    )
}
