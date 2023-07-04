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
    const[helpful, setHelpful] = useState<string>('Helpful?');
    // let wasHelpfulClicked = false; // for helpful useEffect
    const helpfulFunction = () => { // need to finish
        if(helpful !== 'Helpful') {
            setHelpful('Helpful');
            helpfulRequest();
        } else {
            console.log('no stop that')
        }
    };

    const helpfulRequest = () => {// sends that a question was helpful
        axios.request(helpfulQuestion(props.question.question_id))
            .then(response=> {
                console.log(response.status)
            })
            .catch((error)=> console.log('error in helpful request',error))
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
            <Typography>{helpful}
                <Button onClick={helpfulFunction}>  YES  </Button>
                <small>  {props.question.question_helpfulness}  </small> | 
                <Button 
                    onClick={()=>{
                        setAnswerModal(true)
                    }}>Add Answer</Button>
            </Typography>
            <AnswerList questionID = {props.question.question_id}/>
        </Card>
    )
}