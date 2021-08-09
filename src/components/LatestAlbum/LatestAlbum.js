import styled from 'styled-components'
import {AiFillApple} from 'react-icons/ai'
import {IoMdPlay} from 'react-icons/io'
import {SiAmazon} from 'react-icons/si'
import {FaSoundcloud} from 'react-icons/fa'

export const AlbumContainer = styled.div`
    background:#000000e6;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:40px;
    padding-bottom:140px;
`

export const AlbumHeading = styled.h1`
    text-transform: uppercase;
    color:#fff;
    font-size:60px;
    font-family: 'Roboto', sans-serif;
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.24s ease-in-out;
    -moz-transition: opacity 0.24s ease-in-out;
    transition: opacity 0.24s ease-in-out;


    @media screen and (max-width:768px){
        font-size:50px;
    }

    @media screen and (max-width:480px){
        font-size:45px;
        text-align:center;
    }

`

export const BlockTitle= styled.div`
    display: inline-block;
    position: relative;
    padding: 0 .625em;

     &::before{
        position: absolute;
        content: "";
        width: 100%;
        height: .375rem;
        background: #ff5252;
        bottom: .875rem;
        left: 0;
    }

    &::after{
        clear:both;
    }

    @media screen and (max-width:480px){
        &::before{
            display:none !important;
        }
    }
`

export const AlbumInfo= styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    margin-top:100px;
    color:#fff;
`

export const AlbumUl= styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;

`

export const AlbumLi= styled.li`
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
text-decoration: none;
`

export const AlbumH5= styled.h5`
    display: inline-block;
`

export const AlbumSpan= styled.span`
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
text-decoration: none;
`

export const BlockOfIcon = styled.ul`
padding-left: 0px;
list-style: none;
margin-top:1.5rem !important;
display:flex;
justify-content:center;
align-items: center;
cursor:pointer;
`

export const Icons = styled.li`
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right:20px;
`

 export const Apples = styled(AiFillApple)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:35px;
` 

export const Play = styled(IoMdPlay)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:35px;
`

export const Amazon = styled(SiAmazon)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:35px;
`

export const Soundcloud = styled(FaSoundcloud)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:35px;
`

export const IconsContainer = styled.div`
    display:flex;
`

export const PlayListContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    margin-top:100px;
    border: 1px solid grey;
    --bs-gutter-x:300px;
    padding-left:calc(var(--bs-gutter-x)/2);
    padding-right:calc(var(--bs-gutter-x)/2);
    margin-left:auto;
    margin-right:auto;
    
`

export const PlayList = styled.div`
    
    
`