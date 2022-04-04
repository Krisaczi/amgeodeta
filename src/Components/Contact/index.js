import React, { useRef }  from 'react';
import { render } from "react-dom";
import emailjs from '@emailjs/browser';
import Styles from "./Styles";
import { Form, Field, useField } from "react-final-form";
import { ContactContainer, ContactWrapper, ContactRow, Column1,TextWrapper, Column2, Img, ImgWrap, 
    
     TopLine 
        } from './ContactElements';

        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        

const Contact = ({lightBg,  imgStart, topLine, img, alt}) => {
  const form = useRef();
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_87qavam', 'template_zguebb4', 'Form', 'tbJJfLuf0fVK_A_vI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    const onSubmit =  async values => {
     
      await sleep(300);
      window.alert('Wiadomość została wysłana!');
      sendEmail();
    };
    
    
    const Error = ({ name }) => {
      const {
        meta: { touched, error }
      } = useField(name, { subscription: { touched: true, error: true } });
      return touched && error ? <span>{error}</span> : null;
    };

    return (
                <>
                    <ContactContainer lightBg={lightBg} id="contact">
                        <ContactWrapper>
                            <ContactRow imgStart={imgStart}>
                                <Column1>
                                <TopLine>{topLine}</TopLine>
                                    <TextWrapper >                                  
                                          <Styles>                                              
                                              <Form ref={form}
                                                onSubmit={onSubmit}
                                              
                                                validate={values => {
                                                  const errors = {};
                                                  if (!values.firstName) {
                                                    errors.firstName = "Wymagane";
                                                  }
                                                  if (!values.email) {
                                                    errors.email = "Wymagane";
                                                  }
                                                  if (!values.textarea) {
                                                    errors.textarea = "Wymagane";
                                                  } 
                                                  return errors;
                                                }}
                                                render={({ handleSubmit, reset, submitting, pristine, values }) => (
                                                  <form onSubmit={handleSubmit}>
                                                    <div>
                                                      <label>Imię i Nazwisko</label>
                                                      <Field
                                                        name="firstName"
                                                        component="input"
                                                        placeholder=""
                                                      />
                                                      <Error name="firstName" />
                                                    </div>
                                                    <div>
                                                      <label>Email</label>
                                                      <Field name="email" component="input" placeholder="" />
                                                      <Error name="email" />
                                                    </div>
                                                    <div>
                                                      <label>Temat</label>
                                                      <Field name="subject" component="input" type="text" placeholder="" />
                                                    </div>
                                                    <div>
                                                      <label>Wiadomość</label>
                                                      <Field
                                                        name="textarea"
                                                        component="textarea"
                                                        type="text"
                                                        placeholder=""
                                                      />
                                                      <Error name="textarea" />
                                                    </div>
                                                    <div className="buttons">
                                                      <button type="submit" disabled={submitting}>
                                                        Wyślij
                                                      </button>          
                                                    </div>
                                                  </form>
                                                )}
                                              />
                                            </Styles>
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