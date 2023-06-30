import { CardContent, Typography, Divider } from "@mui/joy";
import { TextField, Box, Card, Fade, FormControl, FormLabel, Button, Modal } from "@mui/material";
import axios from "axios";
import postQuestion from "../requests/postQuestion";
// import {useState} from "react"
// import axios from "axios";

type QuestionModalProps = {
    productId:number;
    questionModal: boolean;
    setQuestionModal:(value:boolean)=> void;
}

export default function QuestionModal (props:QuestionModalProps) {

    const handleClose = () => {
        props.setQuestionModal(false);
    }

    // const postRequest = () => {//axios post request
    //     axios.request(postQuestion())
    //     .then(response=> {
    //         console.log(response)
    //     }).catch(error=> console.log('error in questions post request', error))
    // }

    return (
        <Box>
            <Modal
                className = {'Questions QuestionModal'}
                open={props.questionModal}
                onClose={handleClose}
            >
                <Fade in={props.questionModal}>
                    <Card
                        variant="outlined"
                        className="Questions QuestionModal modal"
                    >
                        <Typography
                            level="h2"
                            fontSize='x1'
                        >Submit your Question</Typography>
                        <Typography>this will be the subtitle saying what item</Typography>
                        <Divider inset="none"/>
                        <CardContent>
                            <FormControl>
                                <FormLabel>Question *</FormLabel>
                                <TextField 
                                    multiline={true}
                                    required={true}
                                    onChange={(e)=> {
                                        console.log(e.target.value)
                                    }}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Nickname *</FormLabel>
                                <TextField 
                                    inputProps={{maxLength:60}}
                                    required={true}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                    }}/>
                                <Typography>For privacy reasons, do not use your full name or email</Typography>
                            </FormControl>
                            <Button
                                type="submit"
                                onClick={() => {
                                    console.log('Question submitted')
                                    // postRequest();
                                    props.setQuestionModal(false)
                                }}
                            >Submit</Button>
                        </CardContent>
                    </Card>
                </Fade>
            </Modal>
        </Box>
    )
}