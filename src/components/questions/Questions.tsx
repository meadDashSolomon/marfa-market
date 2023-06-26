import { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import SearchBar from "./SearchBar";
import axios from "axios";
import getRequest from './request';


export default function Questions() {
  const[questions,setQuestions] = useState([]);

  const getQuestions = () => {
    axios.request(getRequest())
    .then((response) => {  
      console.log('Got Data');
      setQuestions(response.data.results)
    })
    .catch((error) => {
      console.log(`ERROR IN GET REQUEST ${error}`)
    })
  };//end of getQuestions

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div>
      <button onClick={(e)=> {console.log(e)}}>SCREAMMMINGGGGGGGGG</button>
      <h3>QUESTIONS & ANSWERS</h3>
      <SearchBar questions = {questions}/>
      <QuestionList questions = {questions}/>

    </div>
  );
}
