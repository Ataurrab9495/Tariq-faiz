import React from 'react'
import './News.css'
import { Link } from 'react-router-dom'
import {Button} from '../Button'


const BlogNews = () => {
    
    return (
        <>
            <div className="NewsFeed" id="news">
                <div className="NewsHeading">
                    <div className="block-title">
                        <h1 className="upperCase">News</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <Link >
                                <img className="animated img-responsive" src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/05/28/939475-tariq-faiz.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="custom-row">
                                <p><small>May 28</small></p>
                                <h1>Meet Tariq Faiz who had an opportunity to share the stage with Legend Rahat Indori Sahab</h1>
                                <p>Music is not something that can be learned in a single day; either you are born with it or you can achieve greatness through hard practice.</p>
                                <a href="https://zeenews.india.com/people/meet-tariq-faiz-who-had-an-opportunity-to-share-the-stage-with-legend-rahat-indori-sahab-2365013.html/amp" target="_blank" className="news-link" rel="noopener noreferrer">
                                    <p className="read">Read more &#62;</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="news-button">
                        <Link to="/NewAbout">

                            <Button buttonSize='btn--wide' buttonColor='blue'>Click For More</Button>
                        </Link>
        
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogNews
