import React from 'react';
import { Link } from "gatsby"
import SEOAnalysisForm from '../Common/SEOAnalysisForm';

const Features = () => {
    return (
        
        <div className="featured-services-area pt-100 pb-70">
         
            <div className="container">
           
                <div className="section-title">
                    <span className="sub-title">Features</span>
                    <h2>Let’s Check Our Featured Services</h2>
                    <p>Create your Success Stories with our Quality IT Services. See our key expertise below.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-services-box">
                            <div className="icon">
                                <i className="flaticon-research"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>

                            <h3>
                                <Link to="/single-services">Web Development</Link>
                            </h3>
                            
                            <p>We acquire our thrills from creating web solutions to help to execute your business operations smooth, fast and efficiently. A big chunk of our daily routine is spent designing and developing custom online business systems,
                            Our experts supplement the customer's thought-process along with their schemes guaranteeing successful project delivery.</p>

                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-services-box">
                            <div className="icon">
                                <i className="flaticon-speed"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>

                            <h3>
                                <Link to="/single-services">Mobile App Development</Link>
                            </h3>
 
                            <p>We reinforce your business strength through adaptable Flutter apps development. We have you covered from design to development, launch, and marketing of simple to intricate mobile apps . Our experts supplement the customer's thought-process along with their schemes guaranteeing successful project delivery.</p>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-featured-services-box">
                            <div className="icon">
                                <i className="flaticon-email-marketing"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>

                            <h3>
                                <Link to="/single-services">Desktop App Development</Link>
                            </h3>
                             
                            <p>We sustain best practices and market trends to deliver well-rounded desktop software development services and execute operations smooth, fast and efficiently. Our competent designers and programmers never hesitate to go extra miles while transforming an exciting desktop application concept into an industry sensation.</p>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;