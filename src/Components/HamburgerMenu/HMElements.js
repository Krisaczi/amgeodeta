import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

export const HamburgerMenuContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
font-family: 'Amiri', serif;

`;
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`


export const CloseIcon = styled(FaTimes)`
color: #ffffff;
`

export const HMWrapper = styled.div`
color: #ffffff;
`
export const HMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 780px) {
grid-template-rows: repeat(6, 60px)

};
`


export const HMLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.5s ease-in-out;
color: #ffffff;
cursor: pointer;

&:hover {
    color: #01bf71;
    transition: 0.5s ease-in-out;
}
` 
export const HMBtnWrapper = styled.div`
display: flex;
justify-content: center;
`
export const HMRoute = styled(LinkRoute)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.5s ease-in-out;
text-decoration: none;


&:hover {
transition: all 0.5s ease-in-out;
background: #ffffff;
color: #010606;
}
`