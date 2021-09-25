import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const WhatWeDo = () => {
    return (
        <div className="what-we-do-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content">
                            <span className="sub-title">What We Do</span>
                            <h2>Our Services Are Defined By Quality And Commitment.</h2>
                            <p>Augersoft is an essential feature of digital information technology.</p>
                            
                            <div className="skills-item">
                                <div className="skills-header">
                                    <h4 className="skills-title">Web & Mobile Development</h4>
                                    <div className="skills-percentage">
                                        <div className="count-box">95%</div>
                                    </div>
                                </div>
                                <div className="skills-bar">
                                    <div className="bar-inner"><div className="bar progress-line" data-width="95"></div></div>
                                </div>
                            </div>
                            <div className="skills-item">
                                <div className="skills-header">
                                    <h4 className="skills-title">BlockChain Services</h4>
                                    <div className="skills-percentage">
                                        <div className="count-box">85%</div>
                                    </div>
                                </div>
                                <div className="skills-bar">
                                    <div className="bar-inner"><div className="bar progress-line" data-width="85"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content-accordion">
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            Consulting
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>We help you create a clear digital strategy that optimizes your path to comprehensive, technology-led business success.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            Implementation
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Our expertise spans all major technologies and business functions, empowering us to deliver comprehensive business solutions.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            Managed Services
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Our global Managed Services teams secure your digital investment with 24x7 monitoring, maintenance, and end-to-end support.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;