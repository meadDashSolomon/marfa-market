import { Box, Button, Stack, Typography } from "@mui/joy"
import QuestionListEntry from "./QuestionListEntry"
import QuestionModal from "./QuestionModal"
import { useCallback, useEffect, useState } from "react"
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
    const[numQuestions, setNumQuestions] = useState<number>(1); //tracks number of questions
    const questionsSort = (a:questionsType, b:questionsType) => {
        return b.question_helpfulness - a.question_helpfulness
    }
    
    const getQuestionsFromServer = async () => { //gets questions every time the page loads
        await axios.request(getQuestions(props.itemId,1,20))
        .then((response) => {
          for( const el of response.data.results) {
            if(!listOfQuestions.includes(el)) {
                listOfQuestions.push(el)
            }
          }
          setQuestions(listOfQuestions);
        }).catch((error)=> console.log('ERROR IN GET QUESTIONS ',error));
      };//end of getQuestionsFromServer
    
    const mappingQuestions = useCallback(() => {//either maps the questions array or displays "no questions"
        if(questions.length === 0){//if there are no questions [complete]
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
        } else if (props.searchQuery.length >= 3) {//if there is a searchQuery [need to highlight every occurance of that word (use split set style and join probably)]
            return questions.sort(questionsSort).slice(numQuestions).map((question) => {
                if (!question.reported && question.question_body.includes(props.searchQuery)) {
                    return (<QuestionListEntry
                        searchQuery={props.searchQuery}
                        key = {questions.indexOf(question)}
                        question = {question}
                    />)
                }
            })
        } else {// if there is no searchQuery
            return questions.sort(questionsSort).slice(numQuestions).map((question) => {
                if (!question.reported) {
                    return (
                        <QuestionListEntry
                            key={ questions.indexOf(question)}
                            question={question}
                        />
                    )
                }
            })
        }
    },[props.searchQuery, questions, numQuestions]); 

    const renderQuestionModal = () => {//conditional rendering of QuestionModal
        if(questionModal) {
            return (
                <QuestionModal
                productId = {props.itemId}
                questionModal = {questionModal}
                setQuestionModal = {setQuestionModal}
            />
            );
        }
    }; 
    useEffect(()=> {
        console.log()
    },[questionModal])
    useEffect(() => {
        getQuestionsFromServer();
      },[props.itemId]);
    const moreQuestionsOnClick = () => {//displays more questions
        setNumQuestions(numQuestions + 2);
    };
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
