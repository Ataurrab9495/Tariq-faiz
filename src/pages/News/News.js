import React from 'react'
import './News.css'
import { Link } from 'react-router-dom'

const BlogNews = () => {
    return (
        <>
            <div className="NewsFeed">
                <div className="NewsHeading">
                    <div className="block-title">
                        <h1 className="upperCase">on the Blog</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <Link>
                                <img className="animated img-responsive" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/19.jpg" />
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="custom-row">
                                <p><small>May 28</small></p>
                                <h1>Meet Tariq Faiz who had an opportunity to share the stage with Legend Rahat Indori Sahab</h1>
                                <p>Music is not something that can be learned in a single day; either you are born with it or you can achieve greatness through hard practice.</p>
                                <a href="https://zeenews.india.com/people/meet-tariq-faiz-who-had-an-opportunity-to-share-the-stage-with-legend-rahat-indori-sahab-2365013.html/amp" target="_blank" className="news-link"><p className="read">Read more &#62;</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogNews
