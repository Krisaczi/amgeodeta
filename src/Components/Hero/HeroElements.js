import styled from "styled-components";


export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
position: relative;
z-index: 1;
font-family: 'Amiri', serif;
`
export const HeroBackground = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
display: grid;

@media screen and (max-width: 480px), screen and (max-height: 600px)  {
height: 100vh;
    
}

`

export const ImageBackground = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background-repeat: no-repeat;
background-size: contain;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;

`

export const HeroH1 = styled.h1`
color: #ffffff;
display: flex;
font-size: 3rem;
text-align: center;
justify-content: center;
// align-self: center;
margin: 0 auto;

@media screen and (min-width: 1201px) {
    font-size: 7rem;
};

@media screen and (max-width: 1200px) {
    font-size: 5rem;
};

@media screen and (max-width: 480px), screen and (max-height: 600px)  {
    font-size: 3rem;
   
};


`
export const HeroP = styled.p`
margin-top: 24px;
color: #ffffff;
font-size: 24px;
text-align: center;
max-width: 600px;
align-self: center;

@media screen and (min-width: 1201px) {
    font-size:  2.5rem;
};

@media screen and (max-width: 1200px) {
    font-size: 2rem;
    max-width: 1000px;
}

@media screen and (max-width: 480px), screen and (max-height: 600px)  {
    font-size: 20px;
}
`

export const HeroButtonWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;

`