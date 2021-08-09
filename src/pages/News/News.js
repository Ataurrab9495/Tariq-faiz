import React from 'react'
import './News.css'
import {Link} from 'react-router-dom'

const BlogNews = () => {
    return (
        <>
          <div className="NewsFeed">
              <div className="NewsHeading">
                  <h1 className="upperCase">on the Blog</h1>
              </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <Link>
                            <img className="animated" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/19.jpg"/>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="custom-row">
                            <p><small>December 18</small></p>
                            <h1>Watch The Official Video for “Options” ft. Stephen Marley</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <p className="read">Read more &#62;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

export default BlogNews
