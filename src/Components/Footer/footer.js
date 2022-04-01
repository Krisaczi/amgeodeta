import React, {useState, useEffect} from 'react'
import { FooterContainer, FooterWrapper, FooterLinksContainer, 
FooterLinksWrapper, FooterLinkItems, FooterLink, WebsiteRights, WebsiteRightsWrapper, WebsiteRightsLogo } from './FooterElements';
import Image from '../../Pictures/KrisAczi_Logo.svg';

const Footer = () => {

  const [scrollNav, setScrollNav] = useState(false);

const changeNav = () => {
    if(window.scrollY >=80) {
        setScrollNav(true)
    } else {
        setScrollNav(false)
    }
};

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems scrollNav={scrollNav}>
                        
                            <FooterLink to='about' smooth={true} duration={1000} spy={true} exact='true'>O mnie</FooterLink>
                            <FooterLink to='discover' smooth={true} duration={1000} spy={true} exact='true'>Doświadczenie</FooterLink>
                            <FooterLink to='services' smooth={true} duration={1000} spy={true} exact='true'>Usługi</FooterLink>
                            <FooterLink to='contact' smooth={true} duration={1000} spy={true} exact='true'>Kontakt</FooterLink>
                            <FooterLink to='opinions' smooth={true} duration={1000} spy={true} exact='true'>Opinie</FooterLink>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
            </FooterLinksContainer>
            <WebsiteRightsWrapper>
                <WebsiteRightsLogo src={Image}></WebsiteRightsLogo>
                <WebsiteRights>KrisAczi 2022 &copy; All rights reserved.</WebsiteRights>
            </WebsiteRightsWrapper>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer;