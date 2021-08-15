import React from 'react'

import styled from 'styled-components';
import {AiOutlineClose} from 'react-icons/ai';



const Background = styled.div`
    width:100%;
    height:100%;
    
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    left:0;
    top:0;
   
    
`;

const SignUpModalWrapper = styled.div`
    width:auto;
    height:600px;
    box-shadow:0 5px 16px rgba(0, 0, 0, 0.2);
    z-index:10;
    color:black;
    position:relative;
    z-index:10;
    border-radius:10px;
`;
const CloseSignUpModal = styled(AiOutlineClose)`
    cursor:pointer;
    position:absolute;
    top:10px;
    right:20px;
    width:35px;
    height:35px;
    padding:0;
    z-index:10;
    color:#000;
    font-weight:bold;

    @media only screen and (max-width:768px){
        display:none;
     }

     @media only screen and (max-width:1250px){
         color:#ffff;
     }
`;


const ModalContent = styled.div`
    padding:10px;
    display:flex;
    flex-direction:column;
    
    line-height:1;
    z-index:10;
   
`;


export const VideoSection = styled.div`
    margin-top:40px;
     z-index:1;
    @media only screen and (max-width:768px){
       display:none;
    }
    
    @media only screen and (max-width:1250px){
        margin-top:20px;
    }

    &.iframe{
        z-index:100;
    }
`


function Videos({ showModal, setShowModal }) {
    
    return (
        <div>
            {showModal ? (
                <Background>
                    <SignUpModalWrapper showModal={showModal}>
                        
                        <ModalContent>
                            <VideoSection >
                            <iframe
                            className="iframe"
                                width="700px"
                                height="515px"
                                src="https://www.youtube.com/embed/m49j8MA5NgI"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            </VideoSection>
                           
                        </ModalContent>
                        <CloseSignUpModal aria-label='close-Modal' onClick={() => setShowModal(prev => !prev)} />
                    </SignUpModalWrapper>
                </Background>
            ) : null}
        </div>
    )
}

export default Videos
