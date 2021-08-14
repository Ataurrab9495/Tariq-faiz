import styled from 'styled-components'
import {BiPlayCircle} from 'react-icons/bi'

export const CarouselConatiner= styled.div`
    background:linear-gradient(180deg, rgba(0,0,0,0.2) 0% , rgba(0,0,0,0.6) 100%);
    font-size:5rem;
    -o-object-fit:cover;
    object-fit:cover;
    background:#232a34;
    background-size: cover;
    margin-top:-80px;

`

export const CustomCarousal = styled.div`
    Z-index:3;
    max-width:1200px;
    margin-top:-310px;
    position:relative;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;
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
    color:#fff;
    font-size:24px;
    text-align:center;
    max-width:600px;

    @media screen and (max-width:768px){
        font-size:24px;
    }

    @media screen and (max-width:480px){
        font-size:18px;
    }
`

export const PlayIcon = styled(BiPlayCircle)`
    display:flex;
    justify-content:center;
    font-size:160px;
    cursor:pointer;
    color:#fff;
`

  
