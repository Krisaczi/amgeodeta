import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { useEffect } from "react";
import { db } from "../../config/firebase";
import { getDocs, addDoc, collection } from "firebase/firestore";

const Form1 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

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
    window.alert('Wiadomość została wysłana!');
    console.log("first")
};

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={()=>{submitForm(); addOpinion()}} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form1;