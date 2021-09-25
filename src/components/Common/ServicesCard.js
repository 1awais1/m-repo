import React from 'react';
import { Link } from "gatsby"

const ServicesCard = () => {
    return (
        <div className="services-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Services</span>
                    <h2>Check Out Our Services</h2>
                    {/* We may add more information here: <p> </p>*/}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Mobile Application Development
                                </Link>
                            </h3>
                            <p>We Specialize in Mobile Application Development</p>

                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-keywords"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Web Application Development
                                </Link>
                            </h3>
                            <p>We Specialize in Web Application Development.</p>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-content-management"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Block-chain Development
                                </Link>
                            </h3>
                            <p>We Specialize in Blockchain Development</p>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-ppc"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Flutter Bootcamp
                                </Link>
                            </h3>
                            <p>We provide 2 week training to our interns with our Flutter developer expert. </p>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-competitor"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Augersoft Technology College
                                </Link>
                            </h3>
                            <p>We are offering Plularsight courses at low cost.</p>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-startup"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Back-End Bootcamp 
                                </Link>
                            </h3>
                            <p>We provide 2 weeks training to our interns with our backend developer expert.</p>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;