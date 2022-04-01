import React, {useState} from 'react'
import  { useEffect } from "react";
import { db } from "../../config/firebase";
import { getDocs, addDoc, collection } from "firebase/firestore";
import {  CommentsContainer, CommentsWrapper, CommentsH1,  NameTag, EmailTag, OpTag, SingleCommentWrapper } from './CommentsElements';
import '../Feedback/index';



const Comments = () => {


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
    })
  
  
      const addOpinion = async () => {
      await addDoc(opinionCollectionCat, {name, email, opinion})
      
  };
  
  
  
  


  return (

    <CommentsContainer id="opinions">
        <CommentsH1>OPINIE</CommentsH1>
        <CommentsWrapper>
            
            {opinionList.map((post) => {
            return (
            <>
                <SingleCommentWrapper>
                 
                      <NameTag> {post.name}</NameTag>
                      <EmailTag> {post.email}</EmailTag>
                      <OpTag> {post.opinion}</OpTag>
                 
                </SingleCommentWrapper>               
            </>
            
            )})}
               
          
           
        </CommentsWrapper>
    </CommentsContainer>
  )
}

export default Comments;