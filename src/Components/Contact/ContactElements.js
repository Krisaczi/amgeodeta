import styled from "styled-components";

export const ContactContainer = styled.div`
color: #ffffff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
box-sizing: border-box;
padding: 0;
margin: 0;
font-family: 'Amiri', serif;

@media screen and (max-width: 480px), screen and (max-height: 600px) {
    
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
   
    };

`
export const ContactWrapper = styled.div`
display: grid;
z-index:1;
height: 100vh;
justify-content: center;


@media screen and (max-width: 480px), screen and (max-height: 600px) {
padding: 0;

}


`
export const ContactRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 1200px) {
grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col2 col2' 'col1 col1'`)}

};



@media screen and (max-width: 480px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`)}
    
    }


`
export const Column1 = styled.div`
margin-bottom: 15px;
margin: 0 auto;
grid-area: col1;

@media screen and (max-width: 480px), screen and (max-height: 950px) {
    margin-bottom: 0;  
    }
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
margin: 0 auto;

@media screen and (max-width: 480px), screen and (max-height: 950px) {
    margin-bottom: 0; 
    padding: 0; 
    }
`
export const TextWrapper = styled.div`

padding-top: 0;


@media screen and (max-width: 480px), screen and (max-height: 600px) {
padding: 0;
margin: 0;
box-sizing: border-box;

}
@media screen and (max-width: 480px), screen and (max-height: 950px) {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;    
    }

`
export const TopLine = styled.h1`
color: #01bf71;
font-size: 1rem;
line-height: 1rem;
font-weight: 700;
text-transform: uppercase;
margin: 0 auto;
text-align: center;

@media screen and (max-width: 480px), screen and (max-height: 950px) {
    
    font-size: 2rem;
    margin-bottom: 30px;
 }

 @media only screen and (min-width: 481px) {
     font-size: 3rem;
     margin-bottom: 10px;
 }


`
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
width: 200px;
`
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;

@media screen and (max-width: 480px), screen and (max-height: 600px) {

  
    max-width: 75%;
    margin: 0px auto;
}

@media screen and (max-width: 480px), screen and (max-height: 950px) {

  
    max-width: 95%;
    margin: 0px auto;
}

@media screen and (max-width: 1200px) and (min-width: 481px) {

    max-width: 60%;
    margin: 0px auto;
}
`
export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
-o-object-fit: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
`
export const FromContent = styled.div`
padding: 0;
margin: 0;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px), screen and (max-height: 950px)  {
       
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    
};



`
export const Form = styled.div`

height: auto;
z-index: 1;
display: flex;
margin: 0 auto;
border-radius: 4px;

@media screen and (max-width: 480px), screen and (max-height: 600px)  {
       
    display: flex;
    flex-direction: column;
    
};

@media screen and (max-width: 480px), screen and (max-height: 950px)  {
   
    
    margin: 0 auto;
    width: 350px;
    
};

@media screen and (max-width: 1200px) and (min-width: 481px) {
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  

}

@media screen and (min-width: 1201px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

` 
export const FeedbackH1 = styled.h1`
font-size: 2rem;
text-align: center;
color: white;
font-weight: 400;
display: block;

@media screen and (max-width: 480px), screen and (max-height: 600px)  {

    font-size: 1rem;
}


@media screen and (max-width: 480px), screen and (max-height: 950px)  {

    font-size: 2rem;
    
}
`
export const FormLabel = styled.label`
font-size: 0.8rem;
margin-bottom: 2px;
margin-top: 6px;

@media screen and (max-width: 480px), screen and (max-height: 950px)  {

    font-size: 1.2rem;
}
`
export const FormInput = styled.input`
padding: 10px 10px;
border: none;
border-radius: 5px;

@media screen and (max-width: 480px), screen and (max-height: 950px)  {

    padding: 15px 10px;
    border: none;
    border-radius: 5px;
    
    
}

@media screen and (max-width: 1200px) and (min-width: 481px) {
    width: 200px;

}

@media screen and (min-width: 1201px) {
width: 200px;

}
`
export const FormTextArea = styled.textarea`
height: 100px;
width: 300px;
border: none;
margin: 5px auto;
border-radius: 5px;

@media screen and (max-width: 480px), screen and (max-height: 600px)  {

width: 95%;
}

@media screen and (max-width: 480px), screen and (max-height: 950px)  {

    width: 99%;
    }

    

@media screen and (min-width: 1201px) {

    width: 375px;
    height: 200px;
    margin: 0;
}
`
export const FormButton = styled.button`
padding: 10px 20px;
background-color: #01bf71;
color: white;
border: none;
border-radius: 10px;
cursor: pointer;
color: #ffffff;

@media screen and (max-width: 480px), screen and (max-height: 950px)  {

    font-size: 1rem;
    padding: 15px 0;
    }

    @media screen and (max-width: 1200px) and (min-width: 481px) {
        width: 200px;
        // padding: 20px 0;
        font-size: 2rem;
        color: black;
    }

    @media screen and (min-width: 1201px) {

        width: 100px;
        margin-top: 10px;
        padding: 10px 0;
        font-size: 1.3rem;
        color: black;

        &:hover{
            background: white;
            transition: 1s ease-in-out;
        }
    }

`
export const Text = styled.span`
text-align: center;
margin-top: 20px;
color: #ffffff;
font-size: 1rem;

` 
export const FormError = styled.p`
color: white;
`