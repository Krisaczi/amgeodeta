import styled from "styled-components";

export const ContactContainer = styled.div`
box-sizing: border-box;
padding: 0;
margin: 0;
height: 100vh;

@media screen and (max-width: 480px), screen and (max-height: 600px) {
    
    height: 100vh;
 
    };

    @media screen and (max-width: 480px), screen and (max-height: 950px) {
    
        height: 100vh;
     
        };

`
export const AppGallery = styled.div`
   
   margin: 0 auto;
   display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Amiri', serif;
    @media screen and (max-width: 480px), screen and (max-height: 600px) {
       
           
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }  
   
        @media screen and (max-width: 480px), screen and (max-height: 950px) {
       
            padding-top: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }  

        @media screen and (min-width: 1201px) {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
        }
`
export const AppGalleryContent = styled.div`
    margin: 0 auto;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 480px), screen and (max-height: 600px) {
    width: 95%; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;   

}
@media screen and (max-width: 480px), screen and (max-height: 950px) {
    width: 95%; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;   

}
`
export const AppGaleryImages = styled.div`
    flex: 1;
    margin: 100px auto;
    display: flex;
    flex-direction: row;
    max-width: 50%;
    position: relative;
   

    @media screen and (max-width: 480px), screen and (max-height: 600px) {

    height: 58%          
    -o-object-fit: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
           
}

@media screen and (max-width: 480px), screen and (max-height: 950px) {

    height: 80%          
    -o-object-fit: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
           
}
`
export const ImagesContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    width: max-content; 
    overflow-x: scroll;  
    -ms-overflow-style: none;
    scrollbar-width: none;  
    &:-webkit-scrollbar {
        display: none;
    }


    @media screen and (max-width: 480px), screen and (max-height: 600px) {

        height: 250px;
        margin: 0 auto;        
        -o-object-fit: cover;
        object-fit: cover;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media screen and (max-width: 480px), screen and (max-height: 950px) {

        height: 350px;
        margin: 0 auto;        
        -o-object-fit: cover;
        object-fit: cover;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: -30px;
    }
`
export const ImagesCard = styled.div`
    position: relative;   
    min-width: 350px;
    // height: 347px;
    margin-right: 2rem;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    cursor: pointer;
    -o-object-fit: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    
    &:hover{

       opacity: 50%;
    }

    @media screen and (min-width: 2000px) {
       
            // min-width: 400px;
            // height: 347px;
        
    }

    @media screen and (max-width: 480px), screen and (max-height: 600px) {
        
            margin: 0 auto;
            -o-object-fit: cover;
            object-fit: cover;
            background-repeat: no-repeat;
            background-size: cover;
           
    }

    @media screen and (max-width: 480px), screen and (max-height: 950px) {
        
        margin: 0 auto;
        -o-object-fit: cover;
        object-fit: cover;
        background-repeat: no-repeat;
        background-size: cover;
        min-width: 400px;
        height: 347px;
        
       
}
`
export const ImageItem = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: .5s ease;

    @media screen and (max-width: 480px), screen and (max-height: 600px) {
                 
            -o-object-fit: cover;
            object-fit: cover;
            background-repeat: no-repeat;
            background-size: cover;
    }

    @media screen and (max-width: 480px), screen and (max-height: 950px) {
                 
        -o-object-fit: cover;
        object-fit: cover;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
}
`
export const ImagesArrows = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    position: absolute;
    bottom: 5%;
    @media screen and (max-width: 480px), screen and (max-height: 600px) {

        right: -5.5%;
        bottom: 50%;
    }

    @media screen and (max-width: 480px), screen and (max-height: 950px) {

        right: -4.3%;
        bottom: 50%;
    }

    @media screen and (max-width: 1200px) and (min-width: 481px) {
        right: -2.1%;
        bottom: 50%;
        
    }

    @media screen and (min-width: 1201px) {

        right: -1.5%;
    }
`
export const AppGalleryH1 = styled.h1 `
    margin: 10px 0;
    padding: 0;
    color: #01bf71;;
    font-size: 2.5rem;

    @media screen and (max-width: 480px), screen and (max-height: 950px) {

       padding-bottom: 20px;
     
    }

    @media screen and (max-width: 1200px) and (min-width: 481px) {
        font-size: 3rem;
    }
   
`
export const AppGalleryP = styled.p`
  margin: 5px 0;
  padding: 0;
  display: block;
  color: black;
  text-align: justify;
 
  
 
  @media screen and (max-width: 480px), screen and (max-height: 950px) {
    font-size: 1.2rem;
    padding-bottom: 20px;
    
 }

 @media screen and (max-width: 1200px) and (min-width: 481px) {
    font-size: 32px;
    line-height: 1;
}

@media screnn and (min-width: 1201px) {
    font-size: 3rem;
}

`








