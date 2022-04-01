import React from 'react'
import { ContactContainer,  
            AppGaleryImages, AppGallery, AppGalleryContent,
        AppGalleryH1, AppGalleryP, ImagesContainer, ImageItem, ImagesArrows, ImagesCard} from '../About/AboutElements'
import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import {images} from '../../Data';
import './Arrows.css'



const Discover = ({lightBg, id, topLine, lightText, headLine,darkText,description,  primary, dark, dark2}) => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === 'left') {
        current.scrollLeft -= 400;
      } else {
        current.scrollLeft += 400;
      }
    };
  
  
    return (
    <>
      <ContactContainer lightBg={lightBg} id='discover'>       
                    <AppGallery>
                        <AppGalleryContent >
                            <AppGalleryH1 >DOŚWIADCZENIE</AppGalleryH1>
                            <AppGalleryP >Nunc quis arcu. Hizzle ante. Yo ma nizzle fo shizzle izzle da bomb. Lorizzle bizzle dolizzle sizzle amizzle, izzle adipiscing fo shizzle my nizzle. Curabitizzle we gonna chung arcu, elementum nizzle, eleifend izzle, mollizzle crunk, est. Aliquizzle ass my shizz. 
                              Donizzle tempizzle gangster turpizzle.</AppGalleryP>
                        </AppGalleryContent>
                        <AppGaleryImages >
                            <ImagesContainer  ref={scrollRef}>
                                {[images.gallery01, images.gallery02, images.gallery03, images.gallery04,images.gallery04,images.gallery05,images.gallery06].map((image, index) => (
                                    <ImagesCard  key={`gallery_image-${index + 1}`}>
                                        <ImageItem src={image} alt="gallery_image" />
                                      
                                    </ImagesCard>
                                ))}
                            </ImagesContainer>
                            <ImagesArrows >
                                <BsArrowLeftShort className='arrowIcon'  onClick={() => scroll('left')} />
                                <BsArrowRightShort className='arrowIcon' onClick={() => scroll('right')} />
                            </ImagesArrows>
                        </AppGaleryImages>
                    </AppGallery>
      </ContactContainer>
    
    </>
  )
}

export default Discover;