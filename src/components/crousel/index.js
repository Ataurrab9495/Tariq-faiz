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
      src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/1.jpg"
      alt="First slide"
      height="620vh"
      width="100%"
      background-size="cover"
    />
    <Carousel.Caption>
      <CustomCarousal>
        <CarouselH1>Welcome to The Website</CarouselH1>
        <CarouselP>Hii this is tariq faiz</CarouselP>
      </CustomCarousal>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 zoom-img"
      src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/2.jpg"
      alt="Second slide"
      height="620vh"
      width="100%"
      background-size="cover"
    />

    <Carousel.Caption>
      <CustomCarousal>
        <CarouselH1>Welcome to The Website</CarouselH1>
        <CarouselP>Hii this is tariq faiz</CarouselP>
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
