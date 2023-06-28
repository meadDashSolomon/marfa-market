import { CardContent, Modal, Typography } from "@mui/joy";
import { TextField, Box, Card, Fade, FormControl, FormLabel, Button } from "@mui/material";
// import {useState} from "react"
// import axios from "axios";

type QuestionModalProps = {
    questionModal: boolean;
    setQuestionModal:(value:boolean)=> void;
}

export default function QuestionModal (props:QuestionModalProps) {

    return (
        <Box>
            <Modal
                className = {'Questions QuestionModal'}
                open={props.questionModal}
            >
                {/*in={isOpen}*/ }
                <Fade>
                    <Card variant="outlined">
                        <Typography>Submit your Question</Typography>
                        <Typography>this will be the subtitle saying what item</Typography>
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
                                    required={true}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                    }}/>
                                <Typography>For privacy reasons, do not use your full name or email</Typography>
                            </FormControl>
                            <Button
                                type="submit"
                                onClick={(e) => {
                                    console.log(e);
                                }}
                            >Submit</Button>
                        </CardContent>
                    </Card>
                </Fade>
            </Modal>
        </Box>
    )
}