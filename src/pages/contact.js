import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from '../components/App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />

			<Navbar />
{/* taking this banner out, we can add it later in the project if we need a specific banner}
			<PageBanner 
                pageTitle="Contact Us" 
            />
    */}
            <div className="contact-info-area pt-100 pb-70">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <p>
                                <h3>Our Address</h3>
                                <p>2442 13th Ave South, Minneapolis, Minnesota 55404</p>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-phone-call'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-phone-call'></i>
                                </div>
                                <h3>Contact</h3>
                                <p>Mobile: <a href="tel:+16518297754">(651) 829 - 7754</a></p>
                                <p>E-mail: <a href="mailto:support@augersoft.com">support@augersoft.com</a></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-time-five'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-time-five'></i>
                                </div>
                                <h3>Hours of Operation</h3>
                                <p>Monday - Friday: 08:30AM-5:00PMCST</p>
                                
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <ContactForm />

            <div id="map">
                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2442%2013th%20Ave%20South,%20Minneapolis,%20Minnesota%2055404+(Augersoft)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
		  
			<Footer />
		</Layout>
    )
}

export default Contact;