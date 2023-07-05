import { Button, Card } from "@mui/material";
import AnswerList from "../answerComponents/AnswerList";
import { format } from "date-fns"
import { Typography } from "@mui/joy";
import { useCallback, useEffect, useState } from "react";
import AnswerModal from "../answerComponents/AnswerModal";
import helpfulQuestion from "../requests/helpfulQuestion";
import axios from "axios";
import getAnswers from "../requests/getAnswers";

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

type answersType = {
    answer_id: number,
    body: string,
    date: string,
    answerer_name: string,
    helpfulness: number,
    photos: string[]
}[]
export default function QuestionListEntry(props:QuestionListEntryProps) {
    //Getting the Answers for Question [and caching]
    const listOfAnswers:answersType = [];
    const[answers, setAnswers] = useState<answersType>([]);
    const[answersFromSeller, setAnswersFromSeller] = useState<answersType>([])
    useEffect(()=> {
        axios.request(getAnswers(props.question.question_id))
        .then((response) => {
            console.log('this is what we got back in answer',response.data.results);
            for(const el of response.data.results) {
                if(!listOfAnswers.includes(el)) {
                    listOfAnswers.push(el);
                }
            }
            console.log(listOfAnswers)
            setAnswers(listOfAnswers);
        }).catch((error)=> console.log('ERROR IN GET ANSWERS',error));
    },[])

    //Helpful Button Components
    const[helpful, setHelpful] = useState<string>('Helpful?');
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

    //New Answer Modal Components
    const[answerModal, setAnswerModal] = useState<boolean>(false);
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