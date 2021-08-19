import React from 'react'
import {Carousel} from 'react-bootstrap'
import {CarouselConatiner, CustomCarousal,PlayIcon} from './CarouselElements'
import './index.css'
import Video from './Video'

const Crousels = () => {
  const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
        <CarouselConatiner>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 zoom-img cr-img"
      src="https://i.ibb.co/CQHWHWv/image0.jpg" 
      alt="First slide"
      height="720vh"
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
      className="d-block w-100 zoom-img cr-img"
      src="https://i.ibb.co/PMJZm0s/IMG-1001.jpg" 
      alt="Second slide"
      height="720vh"
      width="100%"
      background-size="cover"
    />

    <Carousel.Caption>
      <CustomCarousal>
       
        <PlayIcon variant="primary" onClick={() => setModalShow(true)}/>
        <Video  show={modalShow}
        onHide={() => setModalShow(false)}/>
        
      </CustomCarousal>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
</CarouselConatiner>  
        </>
    )
}

export default Crousels
