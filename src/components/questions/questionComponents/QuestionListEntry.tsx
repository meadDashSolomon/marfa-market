import { Button, Card } from "@mui/material";
import AnswerList from "../answerComponents/AnswerList";
import { format } from "date-fns"
import { Typography } from "@mui/joy";
import { useCallback, useEffect, useState } from "react";
import AnswerModal from "../answerComponents/AnswerModal";
import helpfulQuestion from "../requests/helpfulQuestion";
import axios from "axios";


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
            axios.request(helpfulQuestion(props.question.question_id))
            wasHelpfulClicked = true;
        } else {
            console.log('no stop that')
        }
    };
    const renderAnswerModal = useCallback(() => { //conditial rendering of AnswerModal
        if(answerModal) {
            return (
                <AnswerModal
                question_id={props.question.question_id}
                answerModal = {answerModal}
                setAnswerModal={setAnswerModal}
                />
            );
        }
    },[answerModal, props.question.question_id]);

    return (
        <Card className = "Questions QuestionList QuestionListEntry">
            <Card>{renderAnswerModal()}</Card>
            <Typography level = {"h4"}><strong>Q:</strong>{props.question.question_body}</Typography>
            <Typography level = {"subtitle1"}>{props.question.asker_name}</Typography>
            <Typography level = "subtitle2">{format(new Date(props.question.question_date),"PPP")}</Typography>
            <Typography>Helpful?<Button onClick={helpfulPostRequest}>  YES  </Button><small>  {props.question.question_helpfulness}  </small> | <Button onClick={()=>{setAnswerModal(true)}}>Add Answer</Button></Typography>
            <AnswerList questionID = {props.question.question_id}/>
        </Card>
    )
}