import React from 'react'
import './Contact.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaApple, FaAmazon, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Facebook = styled(FaFacebookF)`
    color:grey;
`

export const Instagram = styled(FaInstagram)`
    color:grey;
`

export const Twitter = styled(FaTwitter)`
    color:grey;
`

export const Apple = styled(FaApple)`
    color:grey;
`

export const Amazon = styled(FaAmazon)`
    color:grey;
`

export const Youtube = styled(FaYoutube)`
    color:grey;
`

const ContactPage = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-heading">
                    <h1 className="upperCase"> Stay In Touch</h1>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-md-4 justify-content-center">
                            <div className="booking">
                                <h1 className="upperCase num">booking</h1>
                                <p className="upperCase num">xyz</p>
                                <p className="num">+(409)352-682</p>
                                <p className="num">xyz@gmial.com</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 justify-content-center">
                            <div className="booking">
                                <h1 className="upperCase num">press</h1>
                                <p className="upperCase num">xyz</p>
                                <p className="num">+(409)352-682</p>
                                <p className="num">xyz@gmial.com</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 justify-content-center">
                            <div className="bookin">
                                <h1 className="upperCase num">info</h1>
                                <p className="upperCase num">xyz</p>
                                <p className="num">+(409)352-682</p>
                                <p className="num">xyz@gmial.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pb-5 grids">
                        <div className="col-lg-2 col-md-2 justify-content-center">
                            <div className="Icons">
                                <Link to="/"><Facebook /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 justify-content-center">
                            <div className="Icons">
                                <Link to="/"><Instagram /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 justify-content-center">
                            <div className="Icons">
                                <Link to="/"><Twitter /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 justify-content-center">
                            <div className="Icons">
                                <Link to="/"><Youtube /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 justify-content-center">
                            <div className="Icons">
                                <Link to="/"><Apple /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 justify-content-center">
                            <div className="Icons">
                                <Link to="/"><Amazon /></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactPage
