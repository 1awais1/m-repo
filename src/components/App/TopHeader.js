import React from 'react';
import { Link } from "gatsby"

const TopHeader = () => {
    return (
        <header className="top-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <ul className="top-header-contact-info">
                            <li><i className='bx bx-phone-call'></i> <a href="tel:+16518297754">+1-651-829-7754</a></li>
                            <li><i className='bx bx-envelope'></i> <a href="mailto:support@augersoft.com">support@augersoft.com</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="top-header-btn">
                            <Link to="/contact" className="default-btn">
                                Free Site Analysis
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopHeader;