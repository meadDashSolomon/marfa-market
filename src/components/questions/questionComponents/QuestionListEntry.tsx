import { Button, Card } from "@mui/material";
import AnswerList from "../answerComponents/AnswerList";
import { format } from "date-fns"
import { Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import AnswerModal from "../answerComponents/AnswerModal";


type QuestionListEntryProps = {
    searchQuery?:string;
    key:number,
    question:{
        question_id:number,
        question_body:string,
        question_date:string,
        asker_name:string,
        question_helpfulness:number,
        reported:boolean,
        answers: object
    }
}
export default function QuestionListEntry(props:QuestionListEntryProps) {
    const[answerModal, setAnswerModal] = useState<boolean>(false);

    let wasHelpfulClicked = false; // for 
    const helpfulPostRequest = () => { // need to finish
        if(!wasHelpfulClicked) {
            console.log(1)
            wasHelpfulClicked = true;
        } else {
            console.log('no stop that')
        }
    };
    const renderAnswerModal = () => { //conditial rendering of AnswerModal
        if(answerModal) {
            return (
                <AnswerModal
                question_id={props.question.question_id}
                answerModal = {answerModal}
                setAnswerModal={setAnswerModal}
                />
            );
        }
    };

    return (
        <Card className = "Questions QuestionList QuestionListEntry">
            <Card>{renderAnswerModal()}</Card>
            <Typography level="h4"><strong>Q:</strong>{props.question.question_body}</Typography>
            <small>{format(new Date(props.question.question_date),"PPP")}</small>
            <p>Helpful?<a onClick={helpfulPostRequest}>  YES  </a><small>  {props.question.question_helpfulness}  </small> | <Button onClick={()=>{setAnswerModal(true)}}>Add Answer</Button></p>
            <AnswerList questionID = {props.question.question_id}/>
        </Card>
    )
}