import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Button = styled(LinkScroll)`
border-radius: 50px;
background: ${({primary}) => primary ? '#01bf71' : '#010606'};
white-space: nowrap;
padding: ${({big}) => big ? '14px 48px' : '12px 30px' };
color: ${({dark}) => dark ? '#010606': '#ffffff'};
font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s ease-in-out;
font-family: 'Amiri', serif;


&:hover {
    transition: all 0.5s ease-in-out;
    background: ${({primary}) => primary ? 'white' : '#01bf71'};
};


@media screen and (max-width: 480px), screen and (max-height: 950px)  {
    font-size: 1.5rem;
  
    
    }

    @media screen and (max-width: 1200px) and (min-width: 481px) {
        font-size: 3rem;
      
        
    }

    @media screen and (min-width: 1201px) {
            font-size: 2rem;
          
            
    }
`