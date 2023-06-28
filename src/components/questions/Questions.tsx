import { useState, useEffect } from "react";
import QuestionList from "./questionComponents/QuestionList";
import SearchBar from "./SearchBar";
import axios from "axios";
import getRequest from './requests/getRequest';
import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/joy";

type QuestionsProps = {
  itemId: number
}

export default function Questions(props: QuestionsProps) {
  const[questions,setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const[questionSort, setQuestionSort] = useState();

  const getQuestions = () => {

    axios.request(getRequest(props.itemId))
    .then((response) => {
      // console.log('response from server: ', response.data.results);
      setQuestions(response.data.results)
    })
    .catch((error) => {
      console.log(`ERROR IN GET REQUEST ${error}`)
    })
  };//end of getQuestions


  useEffect(() => {
    getQuestions();
  },[]);

  return (
    <Box className = {'Questions'}>
      <Typography variant="h6" className="Questions Header">QUESTIONS & ANSWERS</Typography>
      <Divider/>
      <SearchBar
        searchQuery={searchQuery}
        setQuestionSort={setQuestionSort}
        setSearchQuery={setSearchQuery}
        />
      <QuestionList
        questions = {questions}
        searchQuery ={searchQuery}
      />

      </Box>
  );
}
