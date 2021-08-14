import React,{useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {ImMusic} from 'react-icons/im'
import {BiSearch} from 'react-icons/bi'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Search,PlayList } from './NavbarElements'

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
                            <NavLinks to="/">HOME</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/">ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Discography">DISCOGRAPHY</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Band">BAND</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Tours">TOURS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Gallery">GALLERY</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/News">NEWS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Contact">CONTACT</NavLinks>
                        </NavItem>
                        <PlayList>
                            <ImMusic to="music"/>
                        </PlayList>
                        
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
