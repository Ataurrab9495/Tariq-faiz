import styled from 'styled-components'
import {FaFacebookF, FaTwitter, FaInstagram, FaSpotify, FaYoutube} from 'react-icons/fa'

export const AlbumContainer = styled.div`
    background-color: #3b2727;
    background-image: linear-gradient(225deg, #3b2727 0%, #335454 50%, #291a1a 100%);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:80px;
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
    z-index:1;
     
        
    &::before{
        
       position: absolute;
       content: " ";
       width: 100%;
       height: .875rem;
       background: #ff5252;
       bottom: .875rem;
       left: 0;
       z-index:-1;
       top:67%;
   

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

 export const Facebook = styled(FaFacebookF)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    font-size:25px;
` 

export const Instagram = styled(FaInstagram)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    font-size:25px;
`

export const Twitter = styled(FaTwitter)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    font-size:25px;
`

export const Youtube = styled(FaYoutube)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    font-size:25px;
`

export const Spotify = styled(FaSpotify)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    font-size:25px;
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