// import { useState, useEffect } from "react";

import { Card, Stack, Typography } from "@mui/joy"
import { format } from "date-fns"


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

    // console.log(props.answer.body)

    const displayUserName = () => {
        // if the userName of the Seller is the same as the userName of the answerer but it in bold 
        return props.answer.id ? <strong>{props.answer.answer_name}</strong>: props.answer.answer_name;
    }

    const mappedImages = () => { //refactor to somewhat match what the overview pictures do
        return (props.answer.photos).map((photo) => {
            return (<img
                        src={photo}
                        style={{maxHeight: '200px'}}
                        onClick={()=> {
                            console.log('this needs to be added but should expand the image')
                        }}
                    />);
        })
    }

    return (
        <Card className='Questions AnswerListEntry'>
            <Typography level="h5"><strong>A:</strong>{props.answer.body}</Typography>
            <Typography
            level="body3"
            >by {displayUserName()}, {format(new Date(props.answer.date),"PPP")} | Helpful? <a>yes</a>({props.answer.helpfulness}) | <a>report</a></Typography>
                <Stack direction={'row'}>
                    {mappedImages()}
                </Stack>
        </Card>
    )
}