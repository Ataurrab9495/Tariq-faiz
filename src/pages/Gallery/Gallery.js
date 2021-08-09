import React from 'react'
import { Gallery, GalleryIconContainer, CameraIcon,Button } from './GalleryElements'
import { Link } from 'react-router-dom'
import './Gallery.css'

const GalleryArea = () => {
    return (
        <>
            <Gallery>
                <GalleryIconContainer>
                    <CameraIcon></CameraIcon>
                </GalleryIconContainer>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-gallery">
                                <Link >
                                    <img className="animated mb-3" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/10.jpg" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-gallery">
                                <Link>
                                    <img className="animated mb-3" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/11.jpg" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-gallery">
                                <Link>
                                    <img className="animated mb-3" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/12.jpg" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-gallery">
                                <Link>
                                    <img className="animated mb-3" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/13.jpg" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-gallery">
                                <Link>
                                    <img className="animated mb-3" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/20.jpg" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-gallery">
                                <Link>
                                    <img className="animated mb-3" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/14.jpg" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="card-gallery">
                                <Link>
                                    <img className="animated" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/15.jpg" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-gallery">
                                <Link>
                                    <img className="animated mb-3" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/16.jpg" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-gallery">
                                <Link>
                                    <img className="animated mb-3" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/17.jpg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Button">

                    <Button className="btn btn-white">Fllow on Instagram</Button>
                    </div>
                </div>
            </Gallery>
        </>
    )
}

export default GalleryArea
