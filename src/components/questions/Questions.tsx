import { useState, useEffect } from "react";
// import { Button } from '@mui/material';

import QuestionList from "./QuestionList";
import SearchBar from "./SearchBar";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import axios from "axios";
import getRequest from './request';


export default function Questions() {
  const[questions,setQuestions] = useState();

  const getQuestions =()=>{
    return axios.request(getRequest())
    .then((response) => {
      console.log(response);
      setQuestions(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };//end of getQuestions

  useEffect(() => {
    getQuestions();
  },[]);
  return (
    <div>
      <h3>QUESTIONS & ANSWERS</h3>
      <SearchBar/>
      <QuestionList questions = {questions}/>

    </div>
  );
}
