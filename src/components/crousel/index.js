import React,{useState} from 'react'
import {Carousel} from 'react-bootstrap'
import {CarouselConatiner, CustomCarousal, CarouselH1, CarouselP, PlayIcon} from './CarouselElements'
import './index.css'
import {Link} from 'react-router-dom'
import Video from './Video'

const Crousels = () => {
  const[showModal, SetShowModal] = useState(false)

  const openModal = () => {
    SetShowModal(prev => !prev);
  }

    return (
        <>
        <CarouselConatiner>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 zoom-img"
      src="https://i.ibb.co/6nv3rmS/Tariq-Faiz-BG1-1.png" 
      alt="First slide"
      height="620vh"
      width="100%"
      background-size="cover"
    />
    <Carousel.Caption>
      <CustomCarousal>
        
      </CustomCarousal>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 zoom-img"
      src="https://i.ibb.co/2FRYHhR/Tariq-Faiz-BG1.png" 
      alt="Second slide"
      height="620vh"
      width="100%"
      background-size="cover"
    />

    <Carousel.Caption>
      <CustomCarousal>
       
        <Link to="/">
        <PlayIcon onClick={openModal} />
        <Video showModal={showModal} setShowModal={SetShowModal}/>
        </Link>
      </CustomCarousal>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
</CarouselConatiner>  
        </>
    )
}

export default Crousels
