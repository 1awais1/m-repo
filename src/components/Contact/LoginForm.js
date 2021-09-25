import React from 'react';


const LoginForm = () => {
    
    return (
        <div className="contact-area pb-100">
            
            <div className="container">

                <div className="row">

                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                            <form id="contactForm">
                                <div className="row">
                                
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Your Name" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="email" placeholder="Your email address" className="form-control" />
                                        </div>
                                    </div>
                
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default LoginForm;