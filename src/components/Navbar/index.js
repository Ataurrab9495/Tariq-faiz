import React from 'react';
import {FaBars} from 'react-icons/fa'
import {ImMusic} from 'react-icons/im'
import {BiSearch} from 'react-icons/bi'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Search,PlayList } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
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
                            <ImMusic to="music"/>
                        </PlayList>
                        <Search>
                            <BiSearch to="search"/>
                        </Search>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
