import React from 'react'
import './Contact.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'

export const Facebook = styled(FaFacebookF)`
    color:grey;
   

    @media only screen and (max-width:480px){
        font-size: 30px;
    }
`

export const Instagram = styled(FaInstagram)`
    color:grey;
   

    @media only screen and (max-width:480px){
        font-size: 30px;
    }
`

export const Twitter = styled(FaTwitter)`
    color:grey;
    

    @media only screen and (max-width:480px){
        font-size: 30px;
    }
`


export const Spotify = styled(FaSpotify)`
    color:grey;

    @media only screen and (max-width:480px){
        font-size: 30px;
    }
    
`

export const Youtube = styled(FaYoutube)`
    color:grey;
    

    @media only screen and (max-width:480px){
        font-size: 30px;
    }
`

const ContactPage = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-heading">
                    <div className="block-title">
                    <h1 className="upperCase"> Stay In Touch</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-6 justify-content-center padding">
                            <div className="booking">
                                <h1 className="upperCase num">booking</h1>
                                <p className="upperCase num">Tariq Faiz</p>
                                <p className="num">+91 87880 71123</p>
                                <p className="num">tariqfaizofficial@gmail.com</p>
                            </div>
                        </div>
                       
                        <div className="col-lg-6 col-md-6 justify-content-center padding">
                            <div className="bookin">
                                <h1 className="upperCase num">info</h1>
                                <p className="upperCase num">Tariq Faiz</p>
                                <p className="num">+91 87880 71123</p>
                                <p className="num">tariqfaizofficial@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pb-5 grids">
                        <div className="col-lg-3 col-md-3 justify-content-center">
                            <div className="Icons">
                                <a href="https://www.facebook.com/tariqfaizofficial/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 justify-content-center">
                            <div className="Icons">
                                <a href="https://instagram.com/tariqfaizofficial" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 justify-content-center">
                            <div className="Icons">
                                <a href="https://twitter.com/drtariqfaiz" target="_blank" rel="noopener noreferrer"><Twitter /></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 justify-content-center">
                            <div className="Icons">
                                <a href="https://youtube.com/channel/UCkR160Ha5lOI8TuztwdWyCA" target="_blank" rel="noopener noreferrer"><Youtube /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 justify-content-center">
                            <div className="Icons">
                                <a href="https://open.spotify.com/artist/5lX81FO7Lb5U6zrzinxAAe?si=A7hfjk0VRuCRbvtwcR0tYw&utm_source=native-share-menu&dl_branch=1" target="_blank" rel="noopener noreferrer"><Spotify/></a>
                            </div>
                        </div>
                        
                        </div>
                    </div>

                </div>
            
        </>
    )
}

export default ContactPage
