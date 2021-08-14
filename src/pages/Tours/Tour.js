import React from "react";
import Tabs, { Tab } from "./Tabs";
import useParam from "./use-params";
import { Link } from "react-router-dom";
import './Tour.css'
import { ImTicket } from 'react-icons/im'

function Tours() {
    const [selectedTab, setSelectedTab] = useParam("tab", "tab1");

    return (
        <section className="tours-section">
            <div className="containers">
                <div className="tours-heading-container">
                    <div className="tours-heading">
                        <h1 className="upperCase">upcoming tour</h1>
                    </div>
                </div>
                <div className="app classes">
                    <Tabs selected={selectedTab} onSelect={setSelectedTab}>
                        <Tab id="tab1" label="American Tour">
                            <div className="content">
                                <div className="video">
                                    <Link to="/">
                                        <iframe
                                            width="700px"
                                            height="515px"
                                            src="https://www.youtube.com/embed/m49j8MA5NgI"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                        ></iframe>
                                    </Link>
                                    <p><small>The Upcoming Tour - Booking Enquiry</small></p>
                                </div>
                                <div class="block-content gap-one-top-sm text-left">
                                    <div class="block-content ">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-3">
                                                <h4 class="switch-fot">14 Mar</h4>
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <h6 class="mb-0 opc-70 uppercase">Melbourne, AU</h6>
                                                <span>Rod Laver Arena</span>
                                            </div>
                                            <div class="col-12 col-lg-5 col-md-5 text-md-right">
                                                <a class="btn-s uppercase btn btn-primary with-ico border-2" href="#"><ImTicket />Vip</a>
                                                <a class="btn-s uppercase btn btn-primary with-ico" href="#"><ImTicket />Buy Ticket</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="block-content "><div class="row">
                                        <div class="col-lg-3 col-md-3">
                                            <h4 class="switch-fot">10 Apr</h4>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <h6 class="mb-0 opc-70 uppercase">Washington, DC, USA</h6>
                                            <span>Capital One Arena</span>
                                        </div>
                                        <div class="col-12 col-lg-5 col-md-5 text-md-right">
                                            <a class="btn-s uppercase btn btn-primary with-ico" href="#"><ImTicket />Buy Ticket</a>
                                        </div>
                                    </div>
                                    </div>
                                    <hr />
                                    <div class="block-content ">
                                        <div class="row"><div class="col-lg-3 col-md-3">
                                            <h4 class="switch-fot">24 May</h4>
                                        </div>
                                            <div class="col-lg-4 col-md-4">
                                                <h6 class="mb-0 opc-70 uppercase">Houston, TX, USA</h6>
                                                <span>Arena Theatre</span>
                                            </div>
                                            <div class="col-12 col-lg-5 col-md-5 text-md-right">
                                                <a class="btn-s uppercase btn btn-primary with-ico border-2" href="https://themeforest.net/user/webredox" target="_blank"><ImTicket />Vip</a>
                                                <a class="btn-s uppercase btn btn-primary with-ico" href="https://themeforest.net/user/webredox/portfolio"><ImTicket />Buy Ticket</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="block-content ">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-3">
                                                <h4 class="switch-fot">31 Jun</h4>
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <h6 class="mb-0 opc-70 uppercase">Chicago, IL, USA</h6>
                                                <span>United Center</span>
                                            </div>
                                            <div class="col-12 col-lg-5 col-md-5 text-md-right">
                                                <a class="btn-s uppercase btn btn-primary with-ico" href="#"><ImTicket />Buy Ticket</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab id="tab2" label="European Tour">
                            <div className="content">
                                <div className="video">
                                    <Link to="/">
                                        <iframe width="700px" 
                                        height="515" 
                                        src="https://www.youtube.com/embed/35iY7H82YjA" 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen
                                        ></iframe>
                                    </Link>
                                    <p><small>The Upcoming Tour - Booking Enquiry</small></p>
                                </div>
                                <div class="block-content gap-one-top-sm text-left">
                                    <div class="block-content ">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-3">
                                                <h4 class="switch-fot">14 Mar</h4>
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <h6 class="mb-0 opc-70 uppercase">Melbourne, AU</h6>
                                                <span>Rod Laver Arena</span>
                                            </div>
                                            <div class="col-12 col-lg-5 col-md-5 text-md-right">
                                                <a class="btn-s uppercase btn btn-primary with-ico border-2" href="#"><ImTicket />Vip</a>
                                                <a class="btn-s uppercase btn btn-primary with-ico" href="#"><ImTicket />Buy Ticket</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="block-content "><div class="row">
                                        <div class="col-lg-3 col-md-3">
                                            <h4 class="switch-fot">10 Apr</h4>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <h6 class="mb-0 opc-70 uppercase">Washington, DC, USA</h6>
                                            <span>Capital One Arena</span>
                                        </div>
                                        <div class="col-12 col-lg-5 col-md-5 text-md-right">
                                            <a class="btn-s uppercase btn btn-primary with-ico" href="#"><ImTicket />Buy Ticket</a>
                                        </div>
                                    </div>
                                    </div>
                                    <hr />
                                    <div class="block-content ">
                                        <div class="row"><div class="col-lg-3 col-md-3">
                                            <h4 class="switch-fot">24 May</h4>
                                        </div>
                                            <div class="col-lg-4 col-md-4">
                                                <h6 class="mb-0 opc-70 uppercase">Houston, TX, USA</h6>
                                                <span>Arena Theatre</span>
                                            </div>
                                            <div class="col-12 col-lg-5 col-md-5 text-md-right">
                                                <a class="btn-s uppercase btn btn-primary with-ico border-2" href="#" target="_blank"><ImTicket />Vip</a>
                                                <a class="btn-s uppercase btn btn-primary with-ico" href="#"><ImTicket />Buy Ticket</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="block-content ">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-3">
                                                <h4 class="switch-fot">31 Jun</h4>
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <h6 class="mb-0 opc-70 uppercase">Chicago, IL, USA</h6>
                                                <span>United Center</span>
                                            </div>
                                            <div class="col-12 col-lg-5 col-md-5 text-md-right">
                                                <a class="btn-s uppercase btn btn-primary with-ico" href="#"><ImTicket />Buy Ticket</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default Tours;
