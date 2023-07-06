import { Card, Typography } from "@mui/joy";
import AnswerListEntry from "./AnswerListEntry";
type AnswerListProps = {
    answers:{
        answer_id: number;
        body: string;
        date: string;
        answerer_name: string;
        helpfulness: number;
        photos: string[];
    }[];
    numAnswers: number;
    setNumAnswers:(value:number)=> void;
    listOfAnswers:{
        answer_id: number;
        body: string;
        date: string;
        answerer_name: string;
        helpfulness: number;
        photos: string[];
    }[];
    searchQuery?:string
};
export default function AnswerList(props:AnswerListProps) {
    const mappingAnswers = () => {
        if(props.answers.length > 0){
            return props.answers.map(answer => {
                return (
                <AnswerListEntry
                    key = {props.answers.indexOf(answer)}
                    answer = {answer}
                />)
            })
        } else {
            return (
                <><Typography sx = {{
                    justifyContent: "center",
                    textAlign: "center"
                }} level="h1">No Answers At This time</Typography></>
            )
        }
        
    }
    return (
        <><Card className = "Questions AnswerList">{mappingAnswers()}</Card></>
    )
}