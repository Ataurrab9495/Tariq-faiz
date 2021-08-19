import React from 'react'
import { Modal } from 'react-bootstrap'
import './index.css'


function Videos(props) {

  return (

    <Modal
      className="background"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bb">
        <Modal.Title id="contained-modal-title-vcenter">

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe 
        class="responsive-iframe" 
        src="https://www.youtube.com/embed/m49j8MA5NgI" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen></iframe>
      </Modal.Body>
    </Modal>

  )
}

export default Videos
