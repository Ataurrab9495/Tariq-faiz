import React, { useState } from "react";
import { Tabs, Tab} from 'react-bootstrap'



import './Tour.css'
import { ImTicket } from 'react-icons/im'

function Tours() {
    const [key, setKey] = useState('home');
   

    return (
        
        <section className="containers bg" id="tours">
            <div className="tours-heading-container">
                <div className="tours-heading">
                    <h1 className="upperCase">Tours</h1>
                </div>
            </div>
            <div className="tab-section">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 content"
                >
                    <Tab eventKey="home" title="American Tour">
                        <iframe
                            class="responsive-iframe"
                            src="https://www.youtube.com/embed/n5aoKw9Bq0E"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <div className="block-content gap-one-top-sm text-left">
                            <div className="block-content ">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <h4 className="switch-fot">14 Mar</h4>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6 className="mb-0 opc-70 uppercase">Melbourne, AU</h6>
                                        <span>Rod Laver Arena</span>
                                    </div>
                                    <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                        <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#Home"><ImTicket />Vip</a>
                                        <a className="btn-s uppercase btn btn-primary with-ico" href="#Home"><ImTicket />Buy Ticket</a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="block-content "><div className="row">
                                <div className="col-lg-3 col-md-3">
                                    <h4 className="switch-fot">10 Apr</h4>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <h6 className="mb-0 opc-70 uppercase">Washington, DC, USA</h6>
                                    <span>Capital One Arena</span>
                                </div>
                                <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                    <a className="btn-s uppercase btn btn-primary with-ico" href="#Home"><ImTicket />Buy Ticket</a>
                                </div>
                            </div>
                            </div>
                            <hr />
                            <div className="block-content ">
                                <div className="row"><div className="col-lg-3 col-md-3">
                                    <h4 className="switch-fot">24 May</h4>
                                </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6 className="mb-0 opc-70 uppercase">Houston, TX, USA</h6>
                                        <span>Arena Theatre</span>
                                    </div>
                                    <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                        <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#Home" target="_blank" rel="noopener noreferrer"><ImTicket />Vip</a>
                                        <a className="btn-s uppercase btn btn-primary with-ico" href="#Home" rel="noopener noreferrer"><ImTicket />Buy Ticket</a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="block-content ">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <h4 className="switch-fot">31 Jun</h4>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6 className="mb-0 opc-70 uppercase">Chicago, IL, USA</h6>
                                        <span>United Center</span>
                                    </div>
                                    <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                        <a className="btn-s uppercase btn btn-primary with-ico" href="#Home"><ImTicket />Buy Ticket</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="European Tour">
                        <iframe
                            class="responsive-iframe"
                            src="https://www.youtube.com/embed/35iY7H82YjA"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture"
                            allowfullscreen>
                        </iframe>

                        <div className="block-content gap-one-top-sm text-left">
                            <div className="block-content ">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <h4 className="switch-fot">14 Mar</h4>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6 className="mb-0 opc-70 uppercase">Melbourne, AU</h6>
                                        <span>Rod Laver Arena</span>
                                    </div>
                                    <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                        <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#Home"><ImTicket />Vip</a>
                                        <a className="btn-s uppercase btn btn-primary with-ico" href="#Home"><ImTicket />Buy Ticket</a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="block-content "><div className="row">
                                <div className="col-lg-3 col-md-3">
                                    <h4 className="switch-fot">10 Apr</h4>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <h6 className="mb-0 opc-70 uppercase">Washington, DC, USA</h6>
                                    <span>Capital One Arena</span>
                                </div>
                                <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                    <a className="btn-s uppercase btn btn-primary with-ico" href="#Home"><ImTicket />Buy Ticket</a>
                                </div>
                            </div>
                            </div>
                            <hr />
                            <div className="block-content ">
                                <div className="row"><div className="col-lg-3 col-md-3">
                                    <h4 className="switch-fot">24 May</h4>
                                </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6 className="mb-0 opc-70 uppercase">Houston, TX, USA</h6>
                                        <span>Arena Theatre</span>
                                    </div>
                                    <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                        <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#Home" target="_blank" rel="noopener noreferrer"><ImTicket />Vip</a>
                                        <a className="btn-s uppercase btn btn-primary with-ico" href="#Home"><ImTicket />Buy Ticket</a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="block-content ">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <h4 className="switch-fot">31 Jun</h4>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6 className="mb-0 opc-70 uppercase">Chicago, IL, USA</h6>
                                        <span>United Center</span>
                                    </div>
                                    <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                        <a className="btn-s uppercase btn btn-primary with-ico" href="#Home" ><ImTicket />Buy Ticket</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                </Tabs>
            </div>
        </section>
    );
}

export default Tours;


