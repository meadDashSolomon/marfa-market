// import { useState, useEffect } from "react";

type AnswerListEntryProps = {
    key:number,
    answer:{
        id: number,
        body: string,
        date: string,
        answer_name: string,
        helpfulness: number,
        photos:string []
    }
}

export default function AnswerListEntry(props: AnswerListEntryProps) {
    console.log(props.answer.body)
    return (
        <div>
            <p><strong>A:</strong>{props.answer.body}</p>
            <small>by {props.answer.answer_name}, {props.answer.date} | Helpful? <a>yes</a>{props.answer.helpfulness} | <a>report</a></small>
                <div>
                    <ul><h1>(THIS IS WHERE THE IMAGES WILL RENDER, MAKE THIS A STACK FROM MUI)</h1></ul>
                    <small>by {props.answer.answer_name} - (TYPE OF PERSON[SELLER|BUYER|NOTBOUGHT]) | Helpful? <a>Yes</a>{props.answer.helpfulness} | <a>report</a></small>
                    
                </div>
        </div>
    )
}