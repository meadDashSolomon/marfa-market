import AnswerListEntry from "./AnswerListEntry";

type AnswerListProps = {
    answers:object
}

export default function AnswerList(props:AnswerListProps) {
    const listOfAnswers = Object.keys(props.answers);
    const mappingAnswers = () => {
        listOfAnswers.map(answer => {
            return (
            <AnswerListEntry
                key = {Number(answer)}
                answer = {props.answers[answer]}
            />)
        })
    }
    return (
        <div>
            {/* to map */}
            <div>{mappingAnswers()}</div>
            <a>LOAD MORE ANSWERS</a>
        </div>
    )
}