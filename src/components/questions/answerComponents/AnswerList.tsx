import { Button, Card } from "@mui/joy";
import AnswerListEntry from "./AnswerListEntry";
import { useEffect, useState } from "react";
import axios from "axios";
import getAnswers from "../requests/getAnswers";

type AnswerListProps = {questionID:number};

type listOfAnswersProps = {
    answer_id: number,
    body: string,
    date: string,
    answerer_name: string,
    helpfulness: number,
    photos: []
}

export default function AnswerList(props:AnswerListProps) {
    const listOfAnswers:listOfAnswersProps[] = [];
    const[answers, setAnswers] = useState<listOfAnswersProps[]>([]);
    
    
    const loadMoreAnswers = () => numOfAnswersShowing += 2;
    let numOfAnswersShowing = 2;
    
    const getAnswersFromServer = () => {
        axios.request(getAnswers(props.questionID))
        .then((response) => {
            console.log('this is what we got back in answer',response.data.results);
            for(const el of response.data.results) {
                if(!listOfAnswers.includes(el)) {
                    listOfAnswers.push(el);
                }
            }
            setAnswers(listOfAnswers);
        }).catch((error)=> console.log('ERROR IN GET ANSWERS',error));
    };//end of getAnswersFromServer




    // const listOfAnswers = Object.keys(props.questionID);
    const mappingAnswers = () => {
        return answers.slice(numOfAnswersShowing).map(answer => {
            return (
            <AnswerListEntry
                key = {answers.indexOf(answer)}
                answer = {answer}
            />)
        })
    }
    useEffect(()=> {
        console.log('useEffect for answers ran');
        getAnswersFromServer();
    },[])
    return (
        <Card className = "Questions AnswerList">
            <Card>{mappingAnswers()}</Card>
            <Button
                onClick={loadMoreAnswers}
            >LOAD MORE ANSWERS</Button>
        </Card>
    )
}