import React from 'react';
import { Link } from "gatsby"

import WhiteLogo from "../../assets/images/white-logo1.png"
import Shape16 from "../../assets/images/shape/shape16.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link to="/" className="logo">
                                <img src={WhiteLogo} alt="logo" />
                            </Link>
                            <p>Blockchain & Mobile Application Solutions</p>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-github'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-youtube'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>

                            <ul className="footer-links-list">
                                
                                {/* We may need to add additional pages not on the navigation bar*/}
                                <li>
                                    <Link to="/about-us-1">About</Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-2">
                            <h3>Resources</h3>

                            {/* Need to redirect to correct links*/}
                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/team-1">Team</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/services-1">Services</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/blog-1">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className="bx bx-world"></i> 
                                    2442 13th Ave South, Minneapolis, MN 55404, United States
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+16518297754">+1 (651) 829 7754</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:support@augersoft.com">support@augersoft.com</a>
                                </li>

                                {/* Need to revisit this as we may add additional information here which may be useful*/}

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} <strong>Augersoft</strong></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src={Shape16} alt="Shape" />
            </div>
        </footer>
    );
}

export default Footer;