import React from 'react'
import { HamburgerMenuContainer, Icon, CloseIcon, HMWrapper, HMenu, HMBtnWrapper, HMLink, HMRoute } from './HMElements';

const HamburgerMenu = ( {isOpen, toggle}) => {
  return (
    <HamburgerMenuContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon></CloseIcon>
        </Icon>
        <HMWrapper>
            <HMenu>
                <HMLink to="about" onClick={toggle}>O mnie</HMLink>
                <HMLink to="discover" onClick={toggle}>Doświadcznie</HMLink>
                <HMLink to="services" onClick={toggle}>Usługi</HMLink>
                <HMLink to="contact" onClick={toggle}>Kontakt</HMLink>
                <HMLink to="opinions" onClick={toggle}>Opinie</HMLink>
            </HMenu>
        <HMBtnWrapper>
                <HMRoute to="/feedback">Wystaw opinię</HMRoute>
            </HMBtnWrapper>
        </HMWrapper>
        
    </HamburgerMenuContainer>
  )
}

export default HamburgerMenu;