import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Navigation = styled.nav`

background: ${({scrolNav}) => (scrolNav ? 'transparent' : 'black')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
font-family: 'Amiri', serif;



@media screen and (max-width: 960px) {
transition: 0.8s all ease;

};

@media screen and (max-width: 480px) , screen and (max-height: 600px) {
    transition: 0.8s all ease;
    background-color: rgba(0,0,0,0.4);
    
    
    };

    @media screen and (max-width: 1200px) and (min-width: 481px) {
        transition: 0.8s all ease;
        background-color: rgba(0,0,0,0.4);
        
        
        };

        @media screen and (min-width: 1201px) {
            background-color: rgba(0,0,0,0.8);

        }
`

export const NavigationContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 10px;
// max-width: 1100px;

@media screen and (max-width: 480px), screen and (max-height: 600px)  {
    padding: 0 5px;

}

`

export const Logo = styled(LinkRouter)`
color: #ffffff;
display: flex;
justify-self: flex-start;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
cursor: pointer;
font-size: 1.5rem;

@media screen and (max-width: 480px), screen and (max-height: 600px)  {

    color: white;
}

@media screen and (max-width: 1200px) and (min-width: 481px) {
    font-size: 2rem;
}

@media screen and (min-width: 1201px) {

    font-size: 3rem;
}

`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
color: white;
};

@media screen and (max-width: 1200px) and (min-width: 769px) {
font-size: 3rem;

}

`
     
export const NavigationMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
display: none;

};


`;
export const NavigationItem = styled.li`
height: 80px;

@media screen and (min-width: 1201px) {
font-size: 1.3rem;
padding: 0 10px;
display: flex;
align-items: center;

}
&:hover {

    background-color: #01bf71;
    color: black;
}

`;

export const NavigationLinks = styled(LinkScroll)`
color: #FFFFFF;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover {
    
    opacity: 0.4;
    color: black;
};

`; 
export const NavigationBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
display: none;

};
`;
export const NavigationBtnLink = styled(LinkRouter)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
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
};

@media screen and (min-width: 1201px) {
    font-size: 1.3rem;
}
`

         