import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
          <div className="footer">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 col-md-6">
                          <p>&copy; 2021 Developed by My Media Markets | All Rights Reserved</p>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <div className="row">
                              <div className="position">
                                  <div className="footer-link">
                                      <Link to="/" className="news-link">privacy policy</Link>
                                  </div>
                              
                              
                              <div className="footer-link">
                                      <Link to="/" className="news-link">Terms of Use</Link>
                                  </div>
                              
                              
                              <div className="footer-link">
                                      <Link to="/" className="news-link">About</Link>
                                  </div>
                              
                              
                              <div className="footer-link">
                                      <Link to="/" className="news-link">Legal</Link>
                                  </div>
                             </div> 
                          </div>
                      </div>
                  </div>
              </div>
              </div>  
        </>
    )
}

export default Footer
