import QuestionListEntry from "./QuestionListEntry"
type QuestionListProps = {
    className: string;
    questions: {
        question_id:number,
        question_body:string,
        question_date:string,
        asker_name:string,
        question_helpfulness:number,
        reported:boolean,
        answers:object[]
    }[]
} 

export default function QuestionList(props:QuestionListProps) {
    // console.log(props.questions)

    const mappingQuestions = () => {
        return props.questions.map((question) => {
            // console.log('THIS IS THE QUESTION THAT IS BEING MAPPED ', question)
            if(!question.reported){
                return (<QuestionListEntry
                    key = {props.questions.indexOf(question)}
                    question = {question}
                />)
            }
        })//map close
    }
    return (
        <div>
            {/* Map this */}
            {/* <QuestionListEntry/> */}
            <>{mappingQuestions()}</>
            <button>MORE ANSWERED QUESTIONS</button>
            {/* adds modal */}
            <button>ADD A QUESTION +</button>
            {/* <Modal> */}
                {/* whatever */}
            {/* </Modal> */}
        </div>
    )
}
