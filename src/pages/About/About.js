import React from 'react'
import './About.css'
import {
    AboutContainer, Row, AboutItems, AboutContainerHolder, BlockOfIcon,
    Icons,
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Spotify,
    IconsContainer,
    AboutItems1,
    AboutItems2,
    AboutItems3,
    Tickets
} from './AboutElements'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <AboutContainer id="about">
                <AboutContainerHolder>
                    <Row>
                        <div className="col-lg-4 col-md-4 padding">
                            <AboutItems>
                                <h1>Dr. Tariq Faiz, Indian Singer Songwriter, Poet & Mbbs.</h1>
                                <p>Son of Renowned Poet and Arabic Scholar Mohammad Rafiq Nadwi & Shaista Parveen.
                                    Born in Akola, Maharashtra.

                                    Tariq Faiz studied his Mbbs from Index Medical College, Indore. (2012 Batch)


                                    Learned Indian Classical Vocals from Dr. Niraj Lande, a Renowned Vocalist from Patiala Gharana.
                                </p>
                                <IconsContainer>
                                    <BlockOfIcon>
                                        <Icons>
                                            <a href="https://www.facebook.com/tariqfaizofficial/" target="_blank"><Facebook /></a>
                                        </Icons>
                                        <Icons>
                                            <a href="https://instagram.com/tariqfaizofficial" target="_blank"><Instagram /></a>
                                        </Icons>
                                        <Icons>
                                            <a href="https://twitter.com/drtariqfaiz" target="_blank"><Twitter /></a>
                                        </Icons>
                                        <Icons>
                                            <a href="https://youtube.com/channel/UCkR160Ha5lOI8TuztwdWyCA" target="_blank"><Youtube /></a>
                                        </Icons>
                                        <Icons>
                                            <a href="https://open.spotify.com/artist/5lX81FO7Lb5U6zrzinxAAe?si=A7hfjk0VRuCRbvtwcR0tYw&utm_source=native-share-menu&dl_branch=1" target="_blank"><Spotify /></a>
                                        </Icons>
                                    </BlockOfIcon>
                                </IconsContainer>
                            </AboutItems>
                        </div>
                        {/* <div className="col-lg-3 col-md-3 padding">
                            <AboutItems1>
                                <div className="flex">
                                    <h3>upcoming tour</h3>
                                    <p>Fort Mason Center</p>
                                    <p>Brooklyn, New York</p>
                                </div>
                            </AboutItems1>
                        </div> */}
                        <div className="col-lg-4 col-md-4 padding">
                            <AboutItems2>
                                <div className="flex">
                                    <h3>Location</h3>
                                    <p>Sunday to Wednesdays</p>
                                    <p>august23 to 26, 2021</p>
                                </div>
                            </AboutItems2>
                        </div>
                        <div className="col-lg-4 col-md-4 padding">
                            <AboutItems3>
                                <div className="flex1">
                                    <button type="button" className="btn btn-dark"><Tickets />Booka a Ticket</button>
                                </div>
                            </AboutItems3>
                        </div>
                    </Row>
                </AboutContainerHolder>
            </AboutContainer>
        </>
    )
}

export default About
