import React from 'react'
import {  Button } from '../ButtonElements';
import { FSecContainer, FSecWrapper, FSecRow, Column1,TextWrapper, TopLine, Heading,Subtitle,BtnWrap, Column2, Img, ImgWrap } from './FirstSection'

const FirstSection = ({lightBg, id, imgStart, topLine, lightText, headLine,darkText,description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
    <FSecContainer lightBg={lightBg} id={id}>
        <FSecWrapper>
            <FSecRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                    </TextWrapper>
                    <BtnWrap>
                        <Button to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        >{buttonLabel}</Button> 
                    </BtnWrap>  
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </FSecRow>
        </FSecWrapper>

    </FSecContainer>
    
    </>
  )
}

export default FirstSection;