import { Button, Card } from "@mui/joy";
import AnswerListEntry from "./AnswerListEntry";
import { useEffect, useState } from "react";
import axios from "axios";
import getAnswers from "../requests/getAnswers";

type AnswerListProps = {questionID:number};

type listOfAnswersProps = {
    answers:{
        answer_id: number,
        body: string,
        date: string,
        answerer_name: string,
        helpfulness: number,
        photos: string[]
    }[]
}

export default function AnswerList(props:AnswerListProps) {
    const listOfAnswers:listOfAnswersProps[] = [];
    const[answers, setAnswers] = useState<listOfAnswersProps[]>([]);
    
    
    const loadMoreAnswers = () => numOfAnswersShowing += 2;
    let numOfAnswersShowing = 2;
    
    // const listOfAnswers = Object.keys(props.questionID);
    const mappingAnswers = () => {
        listOfAnswers.sort()
        return answers.slice(numOfAnswersShowing).map(answer => {
            return (
            <AnswerListEntry
                key = {answers.indexOf(answer)}
                answer = {answer}
            />)
        })
    }
    useEffect(()=> {
        
    },[props.questionID])
    return (
        <Card className = "Questions AnswerList">
            <Card>{mappingAnswers()}</Card>
            <Button
                onClick={loadMoreAnswers}
            >LOAD MORE ANSWERS</Button>
        </Card>
    )
}