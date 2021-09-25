import React, { useState } from "react";
import {Link} from 'gatsby'
//import AppAmination from './AppAmination';

import Logo from "../../assets/images/logo.png"

import InstagramImg1 from "../../assets/images/team/team-img1.jpg"
import InstagramImg2 from "../../assets/images/team/team-img2.jpg"
import InstagramImg3 from "../../assets/images/team/team-img3.jpg"
import InstagramImg4 from "../../assets/images/team/team-img4.jpg"
import InstagramImg5 from "../../assets/images/team/team-img5.jpg"
import InstagramImg6 from "../../assets/images/team/team-img6.jpg"

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    // Sidebar Modal
    const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
    const handleToggleSidebarModal = () => {
        setActiveSidebarModal(!isActiveSidebarModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                                <img src={Logo} alt="logo" />
                            </Link>
                           {/* // <AppAmination /> */}
                           

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    
                                <li className="nav-item">
                                        
                                        
                                        
                                        {/* <Link to="/App" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Click Here to Login
                                        </Link> */}
                                        

                                    </li>

                                    <li className="nav-item">
                                        <Link to="/" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Home
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/single-services" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Services
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link to="/pricing" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Pricing/ATC
                                        </Link>
                                    </li> */}

                                    {/* We need to create a new section for this below and expand on team member journey*/}
                                    {/* <li className="nav-item">
                                        <Link to="/contact" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Team Members
                                        </Link>
                                    </li> */}
    
                                    <li className="nav-item">
                                        <Link to="/blog-1" activeClassName="active" onClick={toggleNavbar}
                                        className="nav-link">
    									Team
    								    </Link>
    							    </li>

                                    <li className="nav-item">
                                        <Link to="/contact" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Contact
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="others-option d-flex align-items-center">

                                <div className="option-item">
                                    <div className="search-box" onClick={handleToggleSearchModal}>
                                        <i className="flaticon-search"></i>
                                    </div>
                                </div>

                                {/* Need to do work on this */}
                                <div className="option-item">
                                    <div className="side-menu-btn" onClick={handleToggleSidebarModal}>
                                        <i className="flaticon-menu"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
 
            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        
                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit">
                                    <i className="flaticon-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}

            {/* Sidebar Modal */}
            <div className={`sidebarModal modal right ${isActiveSidebarModal ? "" : "show"}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="close" onClick={handleToggleSidebarModal}>
                            <i className='bx bx-x'></i>
                        </button>

                        <div className="modal-body">
                            <div className="logo">
                                <Link to="/" className="d-inline-block">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>

                            <div className="instagram-list">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg1} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg2} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg3} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg4} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg5} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg6} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="sidebar-contact-info">
                                <h2>
                                    <a to="tel:+11234567890">+1 (651) 829 7754</a>
                                    <span>OR</span>
                                    <a to="mailto:support@augersoft.com">support@augersoft.com</a>
                                </h2>
                            </div>

                            <ul className="social-list">
                                <li><span>Follow Us On:</span></li>
                                <li><a to="#" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a to="#" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a to="#" target="_blank"><i className='bx bxl-youtube'></i></a></li>
                                <li><a to="#" target="_blank"><i className='bx bxl-twitch'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Sidebar Modal */}
        </React.Fragment>
    );
}

export default Navbar;