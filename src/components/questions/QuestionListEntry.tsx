import AnswerList from "./AnswerList";

export default function QuestionListEntry() {
    return (
        <div>
        {/* question and answer feed */}
            <h5>question</h5>
            <p>Helpful?<a>YES</a> | <a>Add Answer</a></p>
            <AnswerList/>
        </div>
    )
}