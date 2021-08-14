import React from 'react'
import { Gallery, GalleryIconContainer, CameraIcon, Button } from './GalleryElements'
import { Link } from 'react-router-dom'
import './Gallery.css'


const GalleryArea = () => {
    return (
        <>
            <Gallery>
                <GalleryIconContainer>
                    <CameraIcon></CameraIcon>
                </GalleryIconContainer>

                


                <div class="grid">
                    <div class="one "><img src="https://i.ibb.co/jZC0PhC/img1.jpg" alt="" className="img" /></div>
                    <div class="two "><img src="https://i.ibb.co/pr68vh5/img2.jpg" alt="" className="img" /></div>
                    <div class="three span-v "><img src="https://i.ibb.co/64J5PdW/img5.jpg" alt="" className="img" /></div>
                    <div class="four span-h "><img src="https://i.ibb.co/PYvgPbN/img4.jpg" alt="" className="img" /></div>
                    <div class="one span-v span-h "><img src="https://i.ibb.co/9TJkGnv/img3.jpg" alt="" className="img" /></div>
                    <div class="two "><img src="https://i.ibb.co/dWgRgpx/img6.jpg" alt="" className="img" /></div>
                    {/* <div class="three span-h "><img src="//picsum.photos/seed/g/350" alt="" className="img" /></div>
                    <div class="four span-v "><img src="//picsum.photos/seed/h/350" alt="" className="img" /></div>
                    <div class="one "><img src="//picsum.photos/seed/i/350" alt="" className="img" /></div>
                    <div class="two "><img src="//picsum.photos/seed/j/350" alt="" className="img" /></div>
                    <div class="three "><img src="//picsum.photos/seed/k/350" alt="" className="img" /></div>
                    <div class="four span-h "><img src="//picsum.photos/seed/l/350" alt="" className="img" /></div>
                    <div class="one "><img src="//picsum.photos/seed/m/350" alt="" className="img" /></div>
                    <div class="two "><img src="//picsum.photos/seed/n/350" alt="" className="img" /></div>
                    <div class="three "><img src="//picsum.photos/seed/o/350" alt="" className="img" /></div>
                    <div class="four "><img src="//picsum.photos/seed/p/350" alt="" className="img" /></div>
                    <div class="one span-v "><img src="//picsum.photos/seed/q/350" alt="" className="img" /></div>
                    <div class="two "><img src="//picsum.photos/seed/r/350" alt="" className="img" /></div>
                    <div class="three "><img src="//picsum.photos/seed/s/350" alt="" className="img" /></div>
                    <div class="four span-v "><img src="//picsum.photos/seed/t/350" alt="" className="img" /></div>
                    <div class="one "><img src="//picsum.photos/seed/u/350" alt="" className="img" /></div>
                    <div class="two "><img src="//picsum.photos/seed/v/350" alt="" className="img" /></div>
                    <div class="three "><img src="//picsum.photos/seed/w/350" alt="" className="img" /></div>
                    <div class="four span-v span-h "><img src="//picsum.photos/seed/x/350" alt="" className="img" /></div>
                    <div class="one "><img src="//picsum.photos/seed/y/350" alt="" className="img" /></div>
                    <div class="two "><img src="//picsum.photos/seed/z/350" alt="" className="img" /></div> */}
                </div>
                <div className="Button">
                    <Button className="btn btn-white">Fllow on Instagram</Button>
                </div>
            </Gallery>
        </>
    )
}

export default GalleryArea
