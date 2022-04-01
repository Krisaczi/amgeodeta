import React, {useEffect, useState} from "react";
import { Navigation, NavigationContainer, Logo, MobileIcon, NavigationMenu, NavigationItem,NavigationLinks, NavigationBtn, NavigationBtnLink } from "./NavElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";


const Nav = ( {toggle}) => {
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

const toggleHome = () => {
  scroll.scrollToTop();  
}

    return(
        <>
        <IconContext.Provider value={{color:'white'}}>
        <Navigation scrollNav={scrollNav}> 
            <NavigationContainer>
                <Logo to='/' onClick={toggleHome}>AMG</Logo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavigationMenu>
                    <NavigationItem>
                        <NavigationLinks to='about' smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                            O mnie
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='discover' smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                            Doświadczenie
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='services' smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                            Usługi
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='contact' smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                            Kontakt
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='opinions' smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                            Opinie
                        </NavigationLinks>
                    </NavigationItem>
                </NavigationMenu>
                <NavigationBtn>
                    <NavigationBtnLink to='/feedback'>Wystaw Opinię</NavigationBtnLink>
                </NavigationBtn>
            </NavigationContainer>
        </Navigation>
        </IconContext.Provider>
        </>
    )
}

export default Nav;