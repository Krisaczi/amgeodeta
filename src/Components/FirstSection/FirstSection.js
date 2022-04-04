import styled from "styled-components";

export const FSecContainer = styled.div`
color: #ffffff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
box-sizing: border-box;
padding: 0;
margin: 0;
font-family: 'Amiri', serif;


@media screen and (max-width: 1200px) {
    padding: 0;
    };

    @media screen and (max-width: 480px), screen and (max-height: 600px)  {
        padding: 30px 0;
      
       
        };

`
export const FSecWrapper = styled.div`
display: grid;
z-index:1;
height: 100vh;
// max-width: 1100px;
margin-left: auto;
margin-right: auto; 
padding: 0 24px;
justify-content: center;

@media screen and (max-width: 480px), screen and (max-height: 600px)  {

   
    padding: 0px;
}

`
export const FSecRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
justify-items: stretch;
// justify-content: space-evenly;
// align-content: space-between;
align-content: center;
align-items: center;


grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};



@media screen and (max-width: 480px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    
    }

@media screen and (max-width: 1200px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
        
        }

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

}


`
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;


@media screen and (max-width: 480px), screen and (max-height: 600px)  {
max-width: 95%;

}
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;


`
export const TextWrapper = styled.div`
padding-top: 0;


@media screen and (max-width: 480px), screen and (max-height: 600px)  {
width: 95%;
margin: 0 auto;
padding: 0;

}

@media screen and (max-width: 1200px) and (min-width: 481px) { 
    

}

`
export const TopLine = styled.p`
color: #01bf71;
font-size: 1rem;
line-height: 1rem;
font-weight: 700;
text-transform: uppercase;
margin-bottom: 16px;
text-align: center;



@media screen and (max-width: 480px), screen and (max-height: 950px)  {
  font-size: 2rem;
  margin-bottom: 15px;
}

@media screen and (max-width: 1200px) and (min-width: 481px) {
    font-size: 2rem;
}

@media screen and (min-width: 1201px) {
    font-size: 2rem;
}
`
export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 2rem;
line-height: 1.1;
font-weight: 600;
color: #020202;
background: ${({lightText}) => (lightText ? '#f9f9f9' : '#010606')};

@media screen and (max-width: 480px), screen and (max-height: 600px)  {
    font-size: 2rem;
};

`
export const Subtitle = styled.p`
text-align: justify;
display: inline-flex;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#f9f9f9' )};

@media screen and (max-width: 1200px) and (min-width: 481px)
{
    font-size: 1rem;
    
    text-align: justify;
}


@media screen and (max-width: 480px), screen and (max-height: 600px)  {
text-align: justify;
font-size: 14px;

}



@media screen and (max-width: 480px), screen and (max-height: 950px)  {
    text-align: justify;
    padding-top: 15px;
    
    }

   
`
export const BtnWrap = styled.div`
display: flex;
justify-content: center;


@media screen and (max-width: 480px), screen and (max-height: 950px)  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    
    }
`
export const ImgWrap = styled.div`
height: 100%;

@media screen and (max-width: 480px), screen and (max-height: 950px)  {
   margin-top: -100px;
}

@media screen and (min-width: 1201px)  {
    margin-top: 0;
    display: flex;
    justify-content: center;
 }

@media screen and (max-width: 1200px) { 
   margin-top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
}
`
export const Img = styled.img`
width: 75%;
margin: 0 0 10px 0;
padding-right: 0;
-o-object-fit: cover;
object-fit: cover;
background-repeat: no-repeat;
background-size: contain;

@media screen and (max-width: 480px), screen and (max-height: 600px)  {

    
    margin: 0 auto;
    // -o-object-fit: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: contain;


}
`