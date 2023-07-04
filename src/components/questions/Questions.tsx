import {useEffect, useState} from "react";
import QuestionList from "./questionComponents/QuestionList";
import SearchBar from "./SearchBar";
import { Box, Stack, Typography } from "@mui/material";
import { Divider } from "@mui/joy";
import axios from "axios"
import getQuestions from "./requests/getQuestions"

type QuestionsProps = {
  itemId: number
}
type questionsType = {
  question_id:number,
  question_body:string,
  question_date:string,
  asker_name:string,
  question_helpfulness:number,
  reported:boolean,
  answers:object[]
}

export default function Questions(props: QuestionsProps) {
  
  const [searchQuery, setSearchQuery] = useState<string>("");
  const[questionSort, setQuestionSort] = useState<string>('helpfulness');
  
  
  //getting the questions
  const listOfQuestions:questionsType[] = [];
  const[questions,setQuestions] = useState<questionsType[]>([]);
  
  useEffect(() => {
    axios.request(getQuestions(props.itemId,1,1000))
    .then((response) => {
      for( const el of response.data.results) {
        if(!listOfQuestions.includes(el)) {
            listOfQuestions.push(el)
            listOfQuestions.sort(
              (a: {question_helpfulness:number},
               b: {question_helpfulness: number}):number => {
                return b.question_helpfulness - a.question_helpfulness
              });
        }
      }
      setQuestions(listOfQuestions);
    }).catch((error)=> console.log('ERROR IN GET QUESTIONS ',error));
  },[props.itemId]);
  //how many questions are being mapped
  const[numQuestions, setNumQuestions] = useState<number>(2); //tracks number of questions



  return (
    <Box className = {'Questions'}>
      <Typography variant="h6" className="Questions Header">QUESTIONS & ANSWERS</Typography>
      <Divider/>
      <Stack>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setQuestionSort={setQuestionSort}
          />
        <QuestionList
        numQuestions={numQuestions}
        setNumQuestions={setNumQuestions}
        listOfQuestions={listOfQuestions}
        questions={questions.slice(0,numQuestions)}
        itemId = {props.itemId}
        searchQuery = {searchQuery}
        questionSort = {questionSort}
        />
      </Stack>
    </Box>
  );
}
