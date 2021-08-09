import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background:#000;
    height:80px;
    margin-top=:-80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.8rem;
    position:sticky;
    top:0;
    z-index:10;

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
    justify-self:flex-start;
    cursor:pointer;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;
`
export const MobileIcon = styled.div`
    display:none;

    @media only screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%,60%);
        font-size:1.8rem;
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

export const Search = styled.div`
    padding:0px 24px;
    color:#fff;
    font-size:20px;
    cursor:pointer;
`

export const PlayList= styled.div`
    cursor:pointer;
    color:#fff;
`