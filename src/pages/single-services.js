import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from '../components/App/Navbar';
import MainBanner from '../components/HomeDemoOne/MainBanner';
import Footer from '../components/App/Footer';
import SEOAnalysisForm from '../components/Common/SEOAnalysisForm';
import Pricing from '../components/Common/Pricing';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';


import ServicesImg1 from '../assets/images/services/services-img1.png'
import ServicesImg2 from '../assets/images/services/s15-removebg.jpg'

const SingleServices = () => {
    return (
        <Layout>
            <SEO title="Single Services" />

			<Navbar />

{/* we can add this main banner if we want to again but I dont see any point of doing it, can revisit this later}
			<MainBanner 
                pageTitle="Services Details" 
            /> 
    */}
            <div className="overview-area ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="overview-content">
                            <div className="content">
                                <span className="sub-title">Augersoft Development</span>
                                <h2>Creative Solutions, Exponential Results</h2>
                                <p>We believe in catering our services to the best of client needs that are centred towards perfection. Innovations that are tagged with the best development platfroms to generate productive outcomes.</p>
                                <div className="features-text">
                                    <h4>Competent and Compliant</h4>
                                    <p>The right blend of Developers and Engineers that develop nothing less then the best. Augersoft picks up highly competent and skilled professionals according to your projects and deploys them to your service.</p>
                                </div>
                                <div className="features-text">
                                    <h4>Define Your Choices</h4>
                                    <p>The customer is king, their lives and needs are the inspiration. Have 24/7 assistance from our staff and have us build your product how you want it to be !</p>
                                </div>
                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src={ServicesImg1} alt="image"  height="750" width="890" color="white"/>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="overview-image">
                            <div className="image">
                                <img src={ServicesImg2} alt="image" />
                            </div>
                        </div>
                        
                        <div className="overview-content">
                            <div className="content right-content">
                               
                                <h2>Hire Best, Get served Best</h2>
                                <p>We believe client satisfaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                                <ul className="features-list">
                                    <li><span><i className='bx bx-check'></i> Agile Work-flow </span></li>
                                    <li><span><i className='bx bx-check'></i> Multiple Platforms</span></li>
                                    <li><span><i className='bx bx-check'></i> SEO Analytics</span></li>
                                    <li><span><i className='bx bx-check'></i> Documented Projects</span></li>
                                    <li><span><i className='bx bx-check'></i> Dedicated Developers</span></li>
                                    <li><span><i className='bx bx-check'></i> 24/7 Support</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-area bg-f9f9f9 pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Augersoft Development</span>
                        <h2>Core Development Areas</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-content"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Mobile Application/BlockChain Development</h3>
                                <p>Our primary focus is Mobile Application development. We build global mobile applications on Flutter, Android and Ios.We have you covered from design to development, from testing to deployment mobile apps. Our experts supplement the customer's thought-process along with their schemes guaranteeing successful project </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-darts"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Web Development</h3>
                                <p>We provide high-end web solutions to help to execute your business operations smooth, fast and efficiently, we also focus on providing long term maintanance for our business partners and clients. A big chunk of our daily routine is spent designing and developing custom online business systems, devloping remote business be it for blue-chip corporate clients, fresh-faced start-ups or local SMEs. </p>
                                
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-bar-chart"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>BlockChain based Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-megaphone"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Innovative Strategies</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-link"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Desktop App Development</h3>
                                <p>We sustain best practices and market trends to deliver well-rounded desktop software development services. Have you desktop application built efficiently that provides ease to your business.Our competent designers and programmers never hesitate to go extra miles while transforming an exciting desktop application concept into an industry sensation..</p>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-reputation"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Reputation Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <SEOAnalysisForm />
{/* I dont know if we need to add pricing, we may add this for Augersoft Technology College}
            <Pricing />
*/}
            <StartProjectWithUs />
			  
			<Footer />
		</Layout>
    )
}

export default SingleServices;