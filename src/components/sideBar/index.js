import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon> 
          <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">ABOUT</SidebarLink>
                <SidebarLink to="discography">DISCOGRAPHY</SidebarLink>
                <SidebarLink to="band">BAND</SidebarLink>
                <SidebarLink to="toures">TOURES</SidebarLink>
                <SidebarLink to="gallery">GALLERY</SidebarLink>
                <SidebarLink to="news">NEWS</SidebarLink>
                <SidebarLink to="contact">CONTACT</SidebarLink>
            </SidebarMenu>
          </SidebarWrapper> 
        </SidebarContainer>
    )
}

export default Sidebar
