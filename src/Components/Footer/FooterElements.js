import styled from "styled-components"
import {Link} from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll';

export const FooterContainer = styled.footer`
background-color: #d3d3d3;
box-sizing: border-box;
padding: 0;
margin: 0;
width: 100vw;
font-family: 'Amiri', serif;

`
export const FooterWrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;




@media screen and (max-width: 480px), screen and (max-height: 600px)  {
    
}

`
export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;
background-color: #d3d3d3;


@media screen and (max-width: 480px), screen and (max-height: 600px)  {
    
    width: 300px;
    
    }



`
export const FooterLinksWrapper = styled.div`


@media screen and (max-width: 480px), screen and (max-height: 600px)  {


width: 300px;

}



`
export const FooterLinkItems = styled(LinkScroll)`
display: flex;
flex-direction: row;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 100vw;
padding: 5px 20px;
box-sizing: border-box;
margin: 0 5px;
color: #ffffff;
box-sizing: border-box;

@media screen and (max-width: 480px) , screen and (max-height: 600px) {
    margin: 0 auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
};

@media screen and (max-width: 1200px) and (min-width: 481px){

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 5px 0;
}

@media screen and (min-width: 1201px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
}




`
export const FooterLinkTitle = styled.h1`
font-size: 14px;
margin-bottom: 16px;
` 
export const FooterLink = styled(LinkScroll)`
color: black;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
width: 800px;
margin: 5px 5px;
background-color: pink;
padding: 5px 20px;
background-color: #d3d3d3;


&:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;


};

@media screen and (max-width: 480px), screen and (max-height: 600px)  {

    width: 300px;
    height: 25px;
    
    display: block;
    box-sizing: border-box;
    text-align: center;
}

@media screen and (max-width: 1200px) and (min-width: 481px){

    font-size: 1.3rem;
    text-align: center;
}

@media screen and (min-width: 1201px) {
    font-size: 1.5rem;
}

` 

export const WebsiteRightsWrapper = styled.div`

width: 100vw;;
display: flex;
align-items: center;
justify-content: center;


`
export const WebsiteRightsLogo = styled.img`
width: 50px;
height: 50px;
-o-object-fit: cover;
object-fit: cover;
background-repeat: no-repeat;
background-size: contain;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #d3d3d3;

` 
export const WebsiteRights = styled.p`
font-size: 10px;
color: black;
`