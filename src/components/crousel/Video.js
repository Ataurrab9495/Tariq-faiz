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
    color:#fff;
    font-weight:bold;

    @media only screen and (max-width:768px){
        display:none;
     }
`;

/* const ModalImg = styled.img`
    width:100%;
    height:100%;
    border-radius:10px 0 0 10px;
    background:#000;
`;
*/
const ModalContent = styled.div`
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    line-height:1;

   
`;
/*
const Heading = styled.h1`
    margin-top:50px;
    margin-bottom:20px;
    padding:10px;
    color: ${props => props.primary ? 'white' : 'red'}

`;

const Input = styled.input.attrs(props =>({
    type:"text"
})) `

color: 'black';
font-size:14px;
border:none;
outline:none;
border-radius:4px;
margin:8px 0 20px 0;
padding:12px 20px;
box-sizing:border-box;

&.additional:focus{
    box-shadow: 0 10px 10px rgb(0,0,0 / 19%);
}
`;

const PasswordInput = styled(Input).attrs({
    type:"password",
})``;

const EmailInput = styled(Input).attrs({
    type:"email"
})``;

const LoginAnother = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin: 20px 0 20px 0;
`;
const FacebookModal = styled(FaFacebookF)`
width:25px;
height:25px;
padding:0;
z-index:10;
color:#000;
border-radius:4px;

&:hover{
    background:#00008B;
    transition:all 0.2s ease-in-out; 
}
`;

const LinkedinModal = styled(FaLinkedin)`
width:25px;
height:25px;
padding:0;
z-index:10;
color:#000;
border-radius:4px;

&:hover{
    background:#00008B;
    transition:all 0.2s ease-in-out; 
}
`;

const GooglePlus = styled(FaGooglePlus)`
width:25px;
height:25px;
padding:0;
z-index:10;
color:#000;
border-radius:4px;

&:hover{
    background:#f62e2e;
    transition:all 0.2s ease-in-out; 
}
`;

const Paragraph = styled.div`
    text-decoration:none;
    text-align:center;
    font-size:15px;
    font-weight:bold;
    margin-top:35px;
`; */

export const VideoSection = styled.div`
    margin-top:40px;

    @media only screen and (max-width:768px){
       display:none;
    }
`

function Videos({ showModal, setShowModal }) {
    
    return (
        <div>
            {showModal ? (
                <Background>
                    <SignUpModalWrapper showModal={showModal}>
                        
                        <ModalContent>
                            <VideoSection>
                            <iframe
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
