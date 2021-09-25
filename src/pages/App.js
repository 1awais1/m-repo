import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../components/account/gapp.css';


import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from '../components/App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import ContactForm from '../components/Contact/ContactForm';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from '../components/account/login.component';
import SignUp from "../components/account/signup.component";
import ContactImg from '../assets/images/contact.png'

function App() {
  return (
  
  <Router>
 {/* <Navbar></Navbar> */}
 {/* <div className="contact-info-area pt-100 pb-70"> */}
 <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-right ">
        <div className="container">
           {/* <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>  */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link className="navbar-link" to={"/sign-in"}>Login</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-iteam">
                <Link className="nav-link" to ={"/sign-in"}>Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/sign-in' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>
 
 <div className="row">
                    <div className="col-lg-6 col-md-12">
                    
                        <div className="contact-image">
                            <img src={ContactImg} class="rounded float-right" alt="Contact" />
                        </div>
                    </div>
</div>

 {/* </div> */}
  <Footer></Footer>
    </Router>
  );
}

export default App;