import styled from 'styled-components'
import {RiPlayMiniFill} from 'react-icons/ri'

export const CarouselConatiner= styled.div`
    background:#0c0c0c;
    font-size:5rem;
    -o-object-fit:cover;
    object-fit:cover;
    background-size: cover;
    margin-top:-80px;
    z-index:1;
    
    

     
`

export const CustomCarousal = styled.div`
    Z-index:1;
    max-width:1200px;
    margin-top:-410px;
    position:relative;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media screen and (max-width:480px){
        margin-top:-380px;
    }
`

export const CarouselH1 = styled.h1`
color:#fff;
font-size:48px;
text-align:center;

@media screen and (max-width:768px){
    font-size:40px;
}

@media screen and (max-width:480px){
    font-size:32px;
}
`

export const CarouselP = styled.p`
    margin-top:24px;
    color:#fff !important;
    font-size:48px !important;
    text-align:center;
    max-width:600px;

    @media screen and (max-width:768px){
        font-size:24px;
    }

    @media screen and (max-width:480px){
        font-size:18px;
    }
`

export const PlayIcon = styled(RiPlayMiniFill)`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:140px;
    cursor:pointer;
    color:#fff;


    @media screen and (max-width:480px){
        font-size:100px;
    }
    
`

  
