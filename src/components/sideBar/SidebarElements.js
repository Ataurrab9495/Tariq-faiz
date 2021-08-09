import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    display:grid;
    align-items:start;
    padding-top:45px;
    top:0;
    left:0;
    transition:0.3s ease-in-out;
    opacity:${({isOpen})  => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`

export const Icon = styled.div`
    position:absolute;
    top:1rem;
    right:1.2rem;
    background:transparent;
    font-size:1.5rem;
    cursor:pointer;
    outline:none;
`

export const SidebarWrapper = styled.div`
    color:#fff;
`

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6, 50px);

    @media screen and (max-width:480px){
        grid-template-rows:repeat(6, 30px);
    }
`


export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    font-size:1.2rem;
    text-decoration:none;
    list-style-type:none;
    transition:0.2s ease-in-out;
    color:#fff;
    cursor:pointer;
    padding:0px 15px;


    &:hover{
        color:#01bf71;
        transition:0.2s ease-in-out;
    }
`