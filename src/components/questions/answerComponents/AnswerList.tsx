import { Button, Card } from "@mui/joy";
import AnswerListEntry from "./AnswerListEntry";

type AnswerListProps = {
    answers:object
}

export default function AnswerList(props:AnswerListProps) {
    console.log('THIS IS ANSWERS IN ANSWERLISTENTRY', AnswerList)
    const listOfAnswers = Object.keys(props.answers);
    const mappingAnswers = () => {
        return listOfAnswers.map(answer => {
            return (
            <AnswerListEntry
                key = {Number(answer)}
                answer = {props.answers[answer]}
            />)
        })
    }
    return (
        <Card className = "Questions AnswerList">
            <Card>{mappingAnswers()}</Card>
            <Button>LOAD MORE ANSWERS</Button>
        </Card>
    )
}