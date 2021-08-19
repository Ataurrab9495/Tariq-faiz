import React,{useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {ImMusic} from 'react-icons/im'

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,PlayList } from './NavbarElements'

const Navbar = ({toggle}) => {

    const [ScrollNav , SetScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            SetScrollNav(true);
        } else{
            SetScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    },[])

    return (
        <>
            <Nav ScrollNav={ScrollNav}>
                <NavbarContainer>
                    <NavLogo to="/">Tariq Faiz</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discography">DISCOGRAPHY</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="band">BAND</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="tours">TOURS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="gallery">GALLERY</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="news">NEWS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">CONTACT</NavLinks>
                        </NavItem>
                        <PlayList>
                        <NavLinks to="album"><ImMusic/></NavLinks> 
                        </PlayList>         
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
