import { Box, Button, Stack, Typography } from "@mui/joy"
import QuestionListEntry from "./QuestionListEntry"
import QuestionModal from "./QuestionModal"
import { useEffect, useState } from "react"
import { Card } from "@mui/material"
import axios from "axios"
import getQuestions from "../requests/getQuestions"

type QuestionListProps = {
    itemId: number;
    questionSort:string;
    searchQuery:string;

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

export default function QuestionList(props:QuestionListProps) {
    const listOfQuestions:questionsType[] = [];
    const[questions,setQuestions] = useState<questionsType[]>([]);
    const[questionModal, setQuestionModal] = useState<boolean>(false); //tracks if this is visable
    const[numQuestions, setNumQuestions] = useState<number>(10); //tracks number of questions
    const getQuestionsFromServer = () => {
                                //productNum = 37314, page = 1, count = 5
        axios.request(getQuestions(/*props.itemId*/37314,1,numQuestions))
        .then((response) => {
          for( const el of response.data.results) {
            if(!listOfQuestions.includes(el)) {
                listOfQuestions.push(el)
            }
          }
          setQuestions(listOfQuestions);
        }).catch((error)=> console.log('ERROR IN GET QUESTIONS ',error));
      };//end of getQuestionsFromServer
    
    const mappingQuestions = () => {
        if(questions.length === 0){
             return (
             <Card>
                <Typography
                    sx = {{
                        justifyContent: "center",
                        textAlign: "center"
                    }}
                    level="h1"
                >No Questions At This time</Typography>
             </Card>)
            }
        return questions.map((question) => {
            if (!question.reported
                // &&(props.searchQuery.length >= 3
                // &&question.question_body.includes(props.searchQuery))
                ){
                    return (<QuestionListEntry
                        searchQuery={props.searchQuery}
                        key = {questions.indexOf(question)}
                        question = {question}
                    />)
            }
        })//map close
    }; //either maps the questions array or displays no questions

    const renderQuestionModal = () => {
        if(questionModal) {
            return (
                <QuestionModal
                productId = {props.itemId}
                questionModal = {questionModal}
                setQuestionModal = {setQuestionModal}
            />
            );
        }
    }; //conditional rendering of QuestionModal

    const moreQuestionsOnClick = () => {
        setNumQuestions(numQuestions + 1);
    };

    useEffect(()=> {
        console.log()
    },[questionModal])

    useEffect(() => {
        getQuestionsFromServer();
      },[]);

    return (
        <Box className = {'Questions QuestionList'} >
            <Card>{mappingQuestions()}</Card>
            <Card>{renderQuestionModal()}</Card>
            <Stack
                className = "Questions QuestionsList Buttons"
                direction={'row'}
            >
            <Button
                onClick={moreQuestionsOnClick}
            >MORE ANSWERED QUESTIONS</Button>
            <Button
                onClick={()=> {
                    setQuestionModal(true);
                }}
            >ASK A QUESTION +</Button>
            </Stack>
        </Box>
    )
}
