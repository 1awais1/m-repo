import React from 'react';

import SEOAnalysis from '../../assets/images/seo-analysis.png'
import emailjs from 'emailjs-com'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const SEOAnalysisForm = () => {



    toast.configure();
    const  addToast  = () =>
    {
        toast("You're good to go ");
    }
    function sendEmail(e)
    {
e.preventDefault();
emailjs.sendForm('service_fyj5cpy','template_fj4pj3i',e.target,'user_sDmAQ34GR8VgDELHlTeXp').then(res =>
    {
        console.log(res);
    }).catch(err => console.log(err));


    }
    return (
        <div className="seo-analysis-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-img">
                            <img src={SEOAnalysis} alt="SEO Analysis" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-form">
                            <span className="sub-title">Analysis</span>
                            <h2>Get Free Project Analysis</h2>
                            <p>Augersoft provides our valuable clients with free project estimation and analysis.Sit down with our team of experts, lay down a plan and we would be obliged to work with you. </p>
                            
                            <form  onSubmit={sendEmail}> 
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="y_name" className="form-control" id="your_name" placeholder="Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="y_email" className="form-control" id="your_email" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="y_phone" className="form-control" id="phone_number" placeholder="Phone Number" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text"  name="y_project" className="form-control" id="website" placeholder="Project type" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="text" cols="30" rows="5" placeholder="Project Details.." className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="default-btn" onClick={() => addToast( {
      appearance: 'success',
      autoDismiss: true,
    })}>Go!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SEOAnalysisForm;