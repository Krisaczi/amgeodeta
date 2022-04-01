import styled from "styled-components";
import { Link } from "react-router-dom"

export const FeedbackContainer = styled.div`
    margin: 100px auto;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 10px;
    height: 100vh;
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr;
    font-family: 'Amiri', serif;

`
export const FeedbackWrapper = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


@media screen and (max-width: 480px), screen and (max-height: 600px)  {
    height: 100vh;
};

` 

export const FromContent = styled.div`
    width: 80%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

@media screen and (max-width: 480px), screen and (max-height: 600px)  {
    padding: 10px;
}

` 
export const Form = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);

@media screen and (max-width: 400px) {
    padding: 32px 32px;
};

&:invalid FormButton{
    opacity: 0.3;
    pointer-events: none;
}

` 
export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: black;
font-weight: 700;
font-size: 2rem;


@media screen and (max-width: 480px), screen and (max-height: 600px)  {
margin-left: 16px;
margin-top: 8px;
};
`

export const FeedbackH1 = styled.h1`
font-size: 1rem;
    text-align: center;
    width: 80%;
    margin-bottom: 1rem;
    color: black;
`

export const FormLabel = styled.label`
display: inline-block;
    font-size: 0.8rem;
    margin-bottom: 6px;
    color: black;

`
export const FormInput = styled.input`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
width: 80%;
border: 1px solid rgba(171, 183, 183, 0.4);

&:invalid {
    border: 2px solid red;
    background-color: 
}
`

export const FormTextArea = styled.textarea`
height: 200px;
width: 81%;
border: 1px solid rgba(171, 183, 183, 0.4);
margin: 10px auto;
`

export const FormButton = styled.button`
padding: 10px 40px;
background-color: #01bf71;
color: white;
border: none;
border-radius: 10px;
cursor: pointer;
color: #ffffff;
width: 50%;

&:hover{

    background: linear-gradient(
        90deg,
        rgb(39, 143, 255) 0%,
        rgb(12, 99, 250) 100%
      );
      transition: all 0.4s ease-out;
}


`
export const Text = styled.span`
text-align: center;
margin-top: 20px;
color: #ffffff;
font-size: 1rem;

` 

export const Div = styled.div`
// height: 100vh;
// width: 100vw;
`

export const FormError = styled.p`
font-size: 12px;
color: red;
`           
               