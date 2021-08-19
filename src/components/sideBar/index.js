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
                <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
                <SidebarLink to="discography" onClick={toggle}>DISCOGRAPHY</SidebarLink>
                <SidebarLink to="band" onClick={toggle}>BAND</SidebarLink>
                <SidebarLink to="tours" onClick={toggle}>TOURS</SidebarLink>
                <SidebarLink to="gallery" onClick={toggle}>GALLERY</SidebarLink>
                <SidebarLink to="news" onClick={toggle}>NEWS</SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>CONTACT</SidebarLink>
            </SidebarMenu>
          </SidebarWrapper> 
        </SidebarContainer>
    )
}

export default Sidebar
