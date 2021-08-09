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
                      <div className="col-lg-6 col-md-6 position">
                          <div className="row">
                              <div className="col-lg-3 col-md-3 position">
                                  <div className="footer-link">
                                      <Link to="/">privacy policy</Link>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-3 position">
                              <div className="footer-link">
                                      <Link to="/">Terms of Use</Link>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-3 position">
                              <div className="footer-link">
                                      <Link to="/">About</Link>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-3 position">
                              <div className="footer-link">
                                      <Link to="/">Legal</Link>
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
