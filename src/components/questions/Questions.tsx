import { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import SearchBar from "./SearchBar";
import axios from "axios";
import getRequest from './request';

type QuestionsProps = {
  itemId: string
}// thing.toString()

export default function Questions(props: QuestionsProps) {
  const[questions,setQuestions] = useState([]);

  const getQuestions = () => {
    axios.request(getRequest(props.itemId))
    .then((response) => {
      console.log('response from server: ', response.data.results);
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
