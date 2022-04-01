import styled from "styled-components";

export const CommentsContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
margin-top: 3rem;
align-items: center;
background: white;
box-sizing: border-box;
font-family: 'Amiri', serif;
@media screen and (max-width: 768px) {
height: 100vh;

};

@media screen and (max-width: 480px), screen and (max-height: 600px) {
height: 100vh;
margin-top: 2rem;
};

`
export const CommentsH1 = styled.h1`
font-size: 2.5rem;
color: #000000;


@media screen and (max-width: 480px) , screen and (max-height: 600px){
font-size: 2rem;

};

`

export const CommentsWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
};

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
};

@media screen and (max-width: 480px), screen and (max-height: 600px) {
    grid-template-columns: 1fr;
    // padding: 0 20px;
    grid-gap: 5px;
};
`






export const NameTag = styled.div`
display: flex;
    
    border-bottom: 1px solid rgba(0,0,0,0.1);
    box-shadow: outset 0 0 1em gold;
    text-align: center;
    align-items: center;
    color: blue;
    background-color: (243, 241, 239);
    margin-left: -40px;
    padding: 5px;

    
    `

    export const EmailTag = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    box-shadow: outset 0 0 1em gray;
    text-align: center;
    align-items: center;
    color: black;
    margin-left: -40px;
    padding: 5px;
    background-color: (236, 236, 236);
    
    `

    export const OpTag = styled.div`
    // display: flex;
    height:100px;
    width: 300px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    
    // text-align: center;
    // align-items: center;
    color: purple;
    margin-left: -40px;
    padding-left: 5px;

    @media screen and (max-width: 480px), screen and (max-height: 600px) {

        height: 75px;
    }
    
    `

    export const SingleCommentWrapper = styled.ul`
    width: 300px;
    height: 200px:
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    background-color: rgba(236, 240, 241);
    // border: 1px solid rgba(0,0,0,0.4);
    box-shadow: 10px 10px 30px rgba(0,0,0,0.2);
    border-radius: 3px;

    &:hover {
        transform: scale(1.2);
        transition: 0.5s ease-in-out;

    }
    
    `
    export const SingleCommentItem = styled.li`
    width:100px;
    height: 100px;
    background-color: pink;
    `