import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background:${({ScrollNav}) => (ScrollNav ? '#000' : '#0009')};
    height:80px;
    margin-top=:-80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.8rem;
    position:sticky;
    top:0;
    z-index:10;
    transition:.2s ease;

    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1352px;
`

export const NavLogo = styled(LinkR)`
    color:#fff;
    justify-content:center;
    cursor:pointer;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;

    @media only screen and (max-width:480px){
        font-size:1.3rem;
    }
`
export const MobileIcon = styled.div`
    display:none;

    @media only screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%,60%);
        font-size:1.5rem;
        cursor:pointer;
        color:#fff;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style-type:none;
    text-align:center;
    margin-right:-22px;
    margin-bottom:0;
    padding-right:48px;

    @media screen and (max-width:768px){
        display:none;
    }
`

export const NavItem = styled.li`
    color:#fff;
`

export const NavLinks = styled(LinkS)`
    color:#fff;
    align-Items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`



export const PlayList= styled.div`
    cursor:pointer;
    color:#fff;
`