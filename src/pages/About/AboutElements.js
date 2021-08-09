import styled from 'styled-components'
import {AiFillApple} from 'react-icons/ai'
import {IoMdPlay} from 'react-icons/io'
import {SiAmazon} from 'react-icons/si'
import {FaSoundcloud} from 'react-icons/fa'
import {ImTicket} from 'react-icons/im'

export const AboutContainer = styled.div`
    background:url('https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2019/01/25.jpg'), linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(25,25,59,1) 50%, rgba(11,28,31,1) 100%, rgba(0,212,255,1) 100%);
    height:100%;
    background-size: 100% 100%;
    background-blend-mode: hard-light;

    @media screen and (max-width:768px){
        background-size:cover;
    }
`

export const AboutContainerHolder = styled.div`
    --container-x:250px;
    padding-left:calc(var(--container-x)/2);
    padding-right:calc(var(--container-x)/2);
    margin-left:auto;
    margin-right:auto;

    @media screen and (max-width:768px){
        --container-x:150px;
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
    color:white;
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

 export const Apples = styled(AiFillApple)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:35px;

    &:hover{
        color:grey;
    }
` 

export const Play = styled(IoMdPlay)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:35px;

    &:hover{
        color:grey;
    }
`

export const Amazon = styled(SiAmazon)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:35px;

    &:hover{
        color:grey;
    }
`

export const Soundcloud = styled(FaSoundcloud)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:35px;

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
        background:red;
        
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
    }

    
`

export const AboutItems2 = styled.div`
.flex{
        
    border-radius:4px;
    background:black;
    
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