import styled from "styled-components";


export const ServicesContainer = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #f9f9f9;

box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Amiri', serif;


`
export const ServicesWrapper = styled.div`
height: 100vh;
box-sizing: border-box;
margin:0;
padding: 0;


@media screen and (min-width: 1201px) {
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

@media screen and (max-width: 1200px) and (min-width: 801px) {

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  justify-content: center;
}

@media screen and (max-width: 800px) and (min-width: 481px) {
 
  display: flex;
  flex-direction: column;
  gap: 10px;
 

}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
}

`
export const Card1 = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
height: 290px;
position: relative;
border-radius: 10px;
z-index: 1;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);

@media screen and (max-width: 480px) {

  height: 200px;
  margin-bottom: 10px;
}

@media screen and (max-width: 1200px) and (min-width: 801px) {
  height: 400px;
  }

  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
  height: 400px;
  width: 320px;
  }
`
export const Card1Background = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
display: grid;

`
export const Card1Image = styled.img`
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
opacity: 40%;
border-radius: 10px;

@media screen and (max-width: 1200px) and (min-width: 801px) {
// height: 400px;
}
`
export const Card1Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Card1P = styled.p`
color: white;
font-size: 1.1rem;

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
  font-size: 1.5rem;
   }

`
export const Card1Text = styled.p`
font-size: 1rem;
color: white;
z-index: 4;
text-align: center;
display: inline-block;
max-width: 400px;
margin-top: 0;

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
 font-size: 1rem;
  }

  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    font-size: 1rem;
  }
`
export const Card2 = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
height: 290px;
position: relative;
z-index: 1;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);

@media screen and (max-width: 480px) {

  height: 200px;
  margin-bottom: 10px;
}

@media screen and (max-width: 1200px) and (min-width: 801px) {
  height: 400px;
  }

  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
    height: 400px;
    width: 320px;
    }
`
export const Card2Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Card2P = styled.p`
color: white;
font-size: 1.1rem;
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
  font-size: 1.5rem;
  text-align: center;
   }

`
export const Card2Background = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
display: grid;

`
export const Card2Image = styled.img`
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
opacity: 40%;
border-radius: 10px;
`
export const Card2Text = styled.p`
font-size: 1rem;
color: white;
z-index: 4;
text-align: center;
display: inline-block;
max-width: 400px;
margin-top: 0;

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
  font-size: 1rem;
   }

   @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
     font-size: 1rem;
   }
`
export const Card3 = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
height: 290px;
position: relative;
z-index: 1;
margin: 0;
padding: 0;
box-sizing: border-box;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);

@media screen and (max-width: 480px) {

  height: 200px;
}

@media screen and (max-width: 1200px) and (min-width: 801px) {
  height: 400px;
  }

  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
    height: 400px;
    width: 320px;
    }
`
export const Card3P = styled.p`
color: white;


@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
  font-size: 1.5rem;
  text-align: center;
   }

`
export const Card3Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Card3Background = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
display: grid;

`
export const Card3Image = styled.img`
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
opacity: 40%;
border-radius: 10px;
`
export const Card3Text = styled.p`
font-size: 1rem;
color: white;
z-index: 4;
text-align: center;
display: inline-block;
max-width: 400px;
margin-top: 0;
line-hight: 0;

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
  font-size: 1rem;
  text-align: center;
   }

   @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    font-size: 1rem;
  }
`
