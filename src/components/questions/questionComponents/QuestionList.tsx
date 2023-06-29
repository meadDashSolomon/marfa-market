import { Box, Button, Stack } from "@mui/joy"
import QuestionListEntry from "./QuestionListEntry"
import QuestionModal from "./QuestionModal"
import { useEffect, useState } from "react"
type QuestionListProps = {
    searchQuery:string
    questions: {
        question_id:number,
        question_body:string,
        question_date:string,
        asker_name:string,
        question_helpfulness:number,
        reported:boolean,
        answers:object[]
    }[]
} 

export default function QuestionList(props:QuestionListProps) {
    console.log(props.questions)
    const[questionModal, setQuestionModal] = useState<boolean>(false);
    const mappingQuestions = () => {
        return props.questions.map((question) => {
            // console.log('THIS IS THE QUESTION THAT IS BEING MAPPED ', question)
            if(!question.reported){
                return (<QuestionListEntry
                    key = {props.questions.indexOf(question)}
                    question = {question}
                />)
            }
        })//map close
    }

    const renderQuestionModal = () => {
        console.log(questionModal);
        if(questionModal) {
            return (
                <QuestionModal
                questionModal={questionModal}
                setQuestionModal={setQuestionModal}
            />
            );
        }
    }
    useEffect(()=> {
        console.log()
    },[questionModal])

    return (
        <Box className = {'Questions QuestionList'} >
            <>{mappingQuestions()}</>
            <Stack
                className = "Questions QuestionsList Buttons"
                direction={'row'}
            >
            <Button>MORE ANSWERED QUESTIONS</Button>
            <Button
                onClick={()=> {
                    setQuestionModal(true);
                }}
            >ADD A QUESTION +</Button>
            </Stack>
            <>{renderQuestionModal()}</>
        </Box>
    )
}
