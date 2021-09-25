import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from '../components/App/Navbar';
import MainBanner from "../components/HomeDemoOne/MainBanner"
import Footer from '../components/App/Footer';
import BlogSidebar from '../components/Blog/BlogSidebar';
import BlogComments from '../components/Blog/BlogComments';

import BlogDetailsImg from '../assets/images/blog/blog-img1.jpg'
import FarooqImg from '../assets/images/teams/farooq.jpg'
import BlogImg1 from '../assets/images/platforms/react.png'
import BlogImg2 from '../assets/images/platforms/flutter1.png'
import BlogImg3 from '../assets/images/platforms/wordpress.png'
import User1 from '../assets/images/user1.jpg'
import App from './App';
const BlogDetails = () => {
    return (
        <Layout>
            <SEO title="Blog Details" />

			<Navbar />

			{/* <MainBanner 
                pageTitle="Blog Details" 
            />   */}
			
            <div className="blog-details-area bg-f9f9f9 ptb-100">
            
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={FarooqImg} alt="Blog" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            {/* <li>
                                                <i className='bx bx-folder-open'></i>
                                                <span>Category</span>
                                                <a href="#">Fashion</a>
                                            </li>
                                            <li>
                                                <i className='bx bx-group'></i>
                                                <span>View</span>
                                                813,454
                                            </li> */}
                                            <li>
                                                <i className='bx bx-calendar'></i>
                                                <span>Last Updated</span>
                                                Sep 09, 2021
                                            </li>
                                        </ul>
                                    </div>

                                    {/* <h3>Digital Marketing Agency Blogs You Should Read</h3> */}
<br/>
                                    <p>I am the Founder/CEO of Augersoft. I lead an exciting team of technology entrepreneurs, tech wizards, curious minds and enthusiasts from across the globe in helping to solve the worlds most challenging problems. I like to think of myself as a Techno-decentralist (Using Technology as a Decentralization Tool). My team and I develop using the latest technologies to come up with new and exciting Blockchain and Cross-Platform Mobile/Web applications.</p>

                                    <p>My team and I develop using the latest technologies to come up with new and exciting Blockchain and Cross-Platform Mobile/Web applications..</p>

                                    <blockquote className="wp-block-quote">
                                        <p>You never get anywhere if you never try</p>

                                        <cite>Tom Cruise</cite>
                                    </blockquote>

                                   
<div>
<h3>Expertise</h3>
                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src={BlogImg2} alt="Blog" />
                                            </figure>
                                        </li>

                                         <li className="blocks-gallery-item">
                                            <figure>
                                                <img src={BlogImg1} alt="Blog" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src={BlogImg3} alt="Blog" />
                                            </figure>
                                        </li> 
                                    </ul>
</div>
                                    <h3>Four major attributes that I offer:</h3>

                                    <ul className="features-list">
                                        <li><i className='bx bx-badge-check'></i> I'm a team  lead that plays for the team</li>
                                        <li><i className='bx bx-badge-check'></i> Communication skills to get in touch</li>
                                        <li><i className='bx bx-badge-check'></i> I'm focused on my goals</li>
                                        <li><i className='bx bx-badge-check'></i> I try to build a positive environment for work</li>
                                    </ul>

                                    <h3>Role at AugerSoft</h3>
                                    <p>I'm the CEO of AugerSoft with a team of multi-talented software engineers and developer all across the globe.</p>
                                    <p>I manage the progress of the company as a whole</p>
                                    <p>I fetch and deal with the contracts and managerial responsibilities for AugerSoft. Also I'm responsible for getting or signing any contracts affiliated with AugerSoft</p>

                                    {/* <h3>The rise of marketing and why you need it</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> */}
                                </div>

                                <div className="article-footer">
                                    {/* <div className="article-tags">
                                        <span><i className='bx bx-purchase-tag'></i></span>
                                        <a href="#">Fashion</a>
                                        <a href="#">Games</a>
                                        <a href="#">Travel</a>
                                    </div> */}

                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li><a href="#" className="facebook" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                            <li><a href="#" className="twitter" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                            <li><a href="#" className="linkedin" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                            {/* <li><a href="#" className="instagram" target="_blank"><i className='bx bxl-instagram'></i></a></li> */}
                                        </ul>
                                    </div>
                                </div>

                                {/* <div className="article-author">
                                    <div className="author-profile-header"></div>
                                    <div className="author-profile">
                                        <div className="author-profile-title">
                                            <img src={User1} className="shadow-sm" alt="User" />
                                            <h4>Chris Orwig</h4>
                                            <span className="d-block">Photographer, Author, Writer</span>
                                            <p>Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="dibiz-post-navigation">
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <a href="#">
                                                <span className="image-prev">
                                                    <img src={BlogImg1} alt="Blog" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span>
            
                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">Digital Marketing Strategies for Lead Generation</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">Jun 20, 2020</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
            
                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href="#">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">Agencies Can Successfully Recover From COVID?</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">Jun 19, 2020</span>
                                                    </span>
                                                </span>
            
                                                <span className="image-next">
                                                    <img src={BlogImg2} alt="Blog" />
                                                    <span className="post-nav-title">Next</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}

                                <BlogComments /> 
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="blog-right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</Layout>
    )
}

export default BlogDetails;