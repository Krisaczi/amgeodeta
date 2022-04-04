import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, addDoc, collection } from "firebase/firestore";
import { FeedbackContainer, FeedbackWrapper, FromContent, FeedbackH1, Form, FormInput, FormLabel, FormTextArea, Icon, FormButton,} from "./FeedbackElements";

 



const Forms = () => {

        
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [opinion, setOpinion] = useState("");
    
      const opinionCollectionCat = collection(db, "opinions");
    
    
      const [opinionList, setOpinionList] = useState([]);
    
      useEffect(() => {
          const getOpinion = async () =>{
            const data = await getDocs(opinionCollectionCat);
            
            setOpinionList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
          };
          getOpinion();
      },[]);
    
    
        const addOpinion = async () => {
        await addDoc(opinionCollectionCat, {name, email, opinion})
        
    };
    
  return (
   <>
        <FeedbackContainer id="opinions">
        <Icon to="/index">AMG</Icon>
            <FeedbackWrapper>                 
                <FromContent>
                <Form action="/" validate>                       
                       <FeedbackH1>Twoja Opinia</FeedbackH1>
                        <FormLabel htmlFor='name'>
                            Imię i nazwisko
                        </FormLabel>
                        <FormInput type='text' name='name' id='name' minlength="4" onChange={(e) => {setName(e.target.value);}} required/>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput type='email' id="email" name='email' onChange={(e) => {setEmail(e.target.value);}} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required/>
                        <FormLabel htmlFor='textarea'>Twoja opinia</FormLabel>
                        <FormTextArea name='textarea' placeholder="" required onChange={(e) => {setOpinion(e.target.value);}}></FormTextArea>
                        <FormButton type='submit' onClick={addOpinion}>Wyślij</FormButton> 
                </Form>
                </FromContent>
            </FeedbackWrapper>
        </FeedbackContainer>    
   </> 
  )
  }
export default Forms; 