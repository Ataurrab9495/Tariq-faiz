import React from 'react'
import './About.css'
import { AboutContainer, Row, AboutItems, AboutContainerHolder,BlockOfIcon,
    Icons,
    Apples,
    Play,
    Amazon,
    Soundcloud,
    IconsContainer,
    AboutItems1,
    AboutItems2,
    AboutItems3,
    Tickets } from './AboutElements'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <>
            <AboutContainer>
                <AboutContainerHolder>
                    <Row>
                        <div className="col-lg-3 col-md-3 padding">
                            <AboutItems>
                                <h1>A Different Kind of Music</h1>
                                <p>Melbourne is the coastal capital of the southeastern Australian 
                                    state of Victoria. At the city’s centre is the modern Federation
                                    Square development, with plazas, bars, and restaurants by the Yarra 
                                    River. In the Southbank area, the Melbourne Arts Precinct is the site 
                                    of Arts Centre Melbourne and the National Gallery of Victoria, with 
                                    Australian and indigenous art.
                                </p>
                                <IconsContainer>
                                    <BlockOfIcon>
                                        <Icons>
                                            <Link to="/"><Apples /></Link>
                                        </Icons>
                                        <Icons>
                                        <Link to="/"><Play /></Link>
                                        </Icons>
                                        <Icons>
                                        <Link to="/"><Amazon /></Link>
                                        </Icons>
                                        <Icons>
                                        <Link to="/"><Soundcloud /></Link>
                                        </Icons>
                                    </BlockOfIcon>
                                </IconsContainer>
                            </AboutItems>
                        </div>
                        <div className="col-lg-3 col-md-3 padding">
                            <AboutItems1>
                                <div className="flex">
                                    <h3>upcoming tour</h3>
                                    <p>Fort Mason Center</p>
                                    <p>Brooklyn, New York</p> 
                                </div>     
                            </AboutItems1>
                        </div>
                        <div className="col-lg-3 col-md-3 padding">
                            <AboutItems2>
                                <div className="flex">
                               <h3>Location</h3>
                               <p>Sunday to Wednesdays</p>
                               <p>august23 to 26, 2021</p>
                               </div>
                            </AboutItems2>
                        </div>
                        <div className="col-lg-3 col-md-3 padding">
                            <AboutItems3>
                                <div className="flex1">
                                    <button type="button" className="btn btn-dark"><Tickets/>Booka a Ticket</button>
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
