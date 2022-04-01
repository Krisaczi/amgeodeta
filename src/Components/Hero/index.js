import React, {useState} from 'react';
import Image from '../../Pictures/mapaSwiata.jpg'
import { Button } from '../ButtonElements';

import { HeroBackground, HeroContainer, ImageBackground, HeroButtonWrapper, HeroH1, HeroP, HeroContent} from './HeroElements'

const Hero = () => {
const [hover, setHover] = useState(false);

const onHover = () => {
  setHover(!hover);
}

  return (
    
    <HeroContainer>
      <HeroBackground>
        <ImageBackground src={Image} loading={'eager'}></ImageBackground>
      </HeroBackground>
      <HeroContent>
        <HeroH1>AMG</HeroH1>
        <HeroP>USŁUGI GEODEZYJNE</HeroP>
        <HeroButtonWrapper>
          <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>Kontakt</Button>
        </HeroButtonWrapper>
       
      </HeroContent>

    </HeroContainer>
    
  )
}

export default Hero;