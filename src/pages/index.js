import React, {useState} from 'react'
import FirstSection from '../Components/FirstSection'
import { homeOjectOne, homeOjectTwo } from '../Components/FirstSection/Data'
import Hero from '../Components/Hero'
import Nav from '../Components/Nav'
import HamburgerMenu from '../Components/HamburgerMenu'
import Services from '../Components/Services/services'
import Footer from '../Components/Footer/footer'
import Comments from '../Components/Comments/index';
import Contact from '../Components/Contact'
import { ContactObject } from '../Components/Contact/ContactData'

import Discover from '../Components/About'





const Home = () => {
const[isOpen, setIsOpen] = useState(false);

const toggle = () => {
setIsOpen(!isOpen);

};

  return (
    <>
        <HamburgerMenu isOpen={isOpen} toggle={toggle}/>
        <Nav toggle={toggle}/>
        <Hero />
        <FirstSection {...homeOjectOne}/>
        <Discover />
        <FirstSection {...homeOjectTwo}/>
        <Services />
        <Contact  {...ContactObject}/>
        <Comments />
        <Footer />
        </>
  )
}

export default Home;