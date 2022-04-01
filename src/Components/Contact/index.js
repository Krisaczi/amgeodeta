import React from 'react';
import { ContactContainer, ContactWrapper, ContactRow, Column1,TextWrapper, Column2, Img, ImgWrap, Form, FormInput, FromContent, FeedbackH1, FormLabel,
            FormButton, FormTextArea, TopLine 
        } from './ContactElements';


const Contact = ({lightBg,  imgStart, topLine, img, alt}) => {
  
  
    return (
                <>
                    <ContactContainer lightBg={lightBg} id="contact">
                        <ContactWrapper>
                            <ContactRow imgStart={imgStart}>
                                <Column1>
                                <TopLine>{topLine}</TopLine>
                                    <TextWrapper >
                                        <FromContent>         
                                                    <Form   action="mailto:krisaczi@yahoo.com" metod="post" enctype="text/plain" id="nameform" validate>
                                                        <FeedbackH1>Wyślij zapytanie</FeedbackH1>
                                                        <FormLabel htmlFor='name'>
                                                            Imię i Nazwisko
                                                        </FormLabel>
                                                        <FormInput type='text' id='name' name='name' required/>
                                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                                        <FormInput type='email' id='email' name='email' placeholder='' required/>
                                                        <FormLabel htmlFor='textarea'>Twoja wiadomość</FormLabel>
                                                         <FormTextArea placeholder='' name="textarea"></FormTextArea>
                                                        <FormButton  type='submit' form="nameform">Wyślij</FormButton>                      
                                                    </Form>                              
                                        </FromContent>
                                        </TextWrapper>
                                    </Column1>
                                    <Column2>
                                        <ImgWrap>
                                            <Img src={img} alt={alt}/>
                                        </ImgWrap>
                                    </Column2>
                                </ContactRow>
                            </ContactWrapper>
                        </ContactContainer>
                </>
  )
}

export default Contact;