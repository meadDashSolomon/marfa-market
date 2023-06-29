import { Card } from "@mui/material";
import AnswerList from "../answerComponents/AnswerList";
import { format } from "date-fns"
import { Typography } from "@mui/joy";

type QuestionListEntryProps = {
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
    // console.log(props.question.question_id);

    

    return (
        <Card className = "Questions QuestionList QuestionListEntry">
            <Typography level="h4"><strong>Q:</strong>{props.question.question_body}</Typography>
            <small>{format(new Date(props.question.question_date),"PPP")}</small>
            <p>Helpful?<a onClick={(e)=> {
                console.log(e);
            }}>  YES  </a><small>  {props.question.question_helpfulness}  </small> | <a>Add Answer</a></p>
            <AnswerList answers = {props.question.answers}/>
        </Card>
    )
}