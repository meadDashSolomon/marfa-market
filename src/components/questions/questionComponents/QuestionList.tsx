import { Box, Button } from "@mui/joy"
import QuestionListEntry from "./QuestionListEntry"
import QuestionModal from "./QuestionModal"
import { useState } from "react"
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

    const AddQuestionButton = () => {
        console.log(5)
    }

    return (
        <Box className = {'Questions QuestionList'} >
            <>{mappingQuestions()}</>
            <Button>MORE ANSWERED QUESTIONS</Button>
            <Button
                onClick={()=> {
                    setQuestionModal(true);
                }}
            >ADD A QUESTION +</Button>
            <QuestionModal
                questionModal={questionModal}
                setQuestionModal={setQuestionModal}
            />
        </Box>
    )
}
