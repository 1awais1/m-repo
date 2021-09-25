import React from 'react';
import { Link } from "gatsby"

import AboutImg1 from "../../assets/images/about-img1.jpg"

const AboutSection = () => {
    return (
        <div className="about-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={AboutImg1} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">About Us</span>
                                <h2>SYMBOL OF QUALITY WORK</h2>
                                <p>With 20+ experts of various technologies, we use the best industry standards to cater to different business interests, needs, and challenges.</p>
                                <p>Our <b>web</b> gurus equipped with agile development expertise ensure timely deliverables with highest quality standards.</p>
                                <p>We offer secure and reliable <b>mobile</b> SaaS and BaaS solutions for corporates using cross-platform technologies.</p>

                                <ul className="funfacts-list">
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-menu-1"></i>
                                            <h3>1</h3>
                                            <p>Completed projects</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-web-settings"></i>
                                            <h3>100</h3>
                                            <p>Working hours were spent</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-conversation"></i>
                                            <h3>20</h3>
                                            <p>Expert team members</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link to="/about-us-1" className="default-btn">
                                    More About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;