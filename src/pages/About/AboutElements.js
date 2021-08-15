import styled from 'styled-components'

import {FaFacebookF, FaTwitter, FaInstagram, FaSpotify, FaYoutube} from 'react-icons/fa'
import {ImTicket} from 'react-icons/im'

export const AboutContainer = styled.div`
    background:url('https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2019/01/25.jpg'), linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(25,25,59,1) 50%, rgba(11,28,31,1) 100%, rgba(0,212,255,1) 100%);
    height:100%;
    background-size: 100% 100%;
    background-blend-mode: hard-light;

    @media screen and (max-width:768px){
        
    }
`

export const AboutContainerHolder = styled.div`
    --container-x:250px;
    padding-left:calc(var(--container-x)/2);
    padding-right:calc(var(--container-x)/2);
    margin-left:auto;
    margin-right:auto;

    @media screen and (max-width:768px){
        --container-x:100px;
    padding-left:calc(var(--container-x)/2);
    padding-right:calc(var(--container-x)/2);
    margin-left:auto;
    margin-right:auto;
    }

    @media screen and (max-width:468px){
        --container-x:100px;
    padding-left:calc(var(--container-x)/2);
    padding-right:calc(var(--container-x)/2);
    margin-left:auto;
    margin-right:auto;
    }

    @media screen and (max-width:1250px){
        --container-x:90px;
    padding-left:calc(var(--container-x)/2);
    padding-right:calc(var(--container-x)/2);
    margin-left:auto;
    margin-right:auto;
    }
`


export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
`

export const AboutItems = styled.div`

h1{
    color:white;
    font-size:40px;
    font-family: 'Roboto', sans-serif;
}

p{
    color:#fff !important;
    font-size:15px;
}
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

    &:hover{
        color:grey;
    }
` 

export const Instagram = styled(FaInstagram)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    font-size:25px;

    &:hover{
        color:grey;
    }
`

export const Twitter = styled(FaTwitter)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    font-size:25px;

    &:hover{
        color:grey;
    }
`

export const Youtube = styled(FaYoutube)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    font-size:25px;

    &:hover{
        color:grey;
    }
`
export const Spotify = styled(FaSpotify)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    font-size:25px;

    &:hover{
        color:grey;
    }
`

export const IconsContainer = styled.div`
    display:flex;
`

export const AboutItems1 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    .flex{
        
        border-radius:4px;
        background-color: #3a5556;
        background-image: linear-gradient(180deg, #3a5556 0%, #3f293f 50%, #522d2d 100%);
        
        padding:12px 12px;
        color:white;
        text-align:center;
        
    }

    h3{
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-size:25px;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size:14px;
        font-weight:500;
        padding:0;
        margin:0;
        color: #fff;
    }

    
`

export const AboutItems2 = styled.div`
.flex{
        
    border-radius:4px;
    background-color: #3a5556;
    background-image: linear-gradient(180deg, #3a5556 0%, #3f293f 50%, #522d2d 100%);

    
    padding:12px 12px;
    color:white;
    text-align:center;
    
}

h3{
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-size:25px;
}

p{
    font-family: 'Roboto', sans-serif;
    font-size:14px;
    font-weight:500;
    padding:0;
    margin:0;
    color:#fff;
}


`

export const AboutItems3 = styled(AboutItems1)`
    background:none !important;

    .flex1{
    border-radius:4px;
    
    padding:12px 12px;
    color:white;
    text-align:center;
    }
`

export const Tickets = styled(ImTicket)`
    padding-right:5px;
`