import { CardContent, Modal, Typography } from "@mui/joy";
import { TextField, Box, Card, Fade, FormControl, FormLabel, Button } from "@mui/material";
import AnswerPicturesModal from "./AnswerPicturesModal";
import {useState} from "react"
// import axios from "axios";

type AnswerModalProps = {
    isOpen: boolean
}

export default function AnswerModal (props:AnswerModalProps) {
    const[picturesModal, setPicturesModal] = useState<boolean>(false)
    return (
        <Box>
            <Modal
                className = {'Questions AnswersModal'}
                open={props.isOpen}
            >
                {/*in={isOpen}*/ }
                <Fade>
                    <Card variant="outlined">
                        <Typography>Submit your Answer</Typography>
                        <Typography>this will be the subtitle saying what item</Typography>
                        <CardContent>
                            <FormControl>
                                <FormLabel>Answer *</FormLabel>
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
                                    placeholder="Example: jack543!"
                                    required={true}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                    }}/>
                                <Typography>For privacy reasons, do not use your full name or email</Typography>
                            </FormControl>
                            <FormControl>
                                <Button 
                                    onClick={() =>{
                                        console.log('OPENING PICTURES MODAL IN ANSWERS')
                                        setPicturesModal(true)
                                    }}
                                >Pictures</Button>
                                <AnswerPicturesModal
                                    picturesModal={picturesModal}
                                    setPictuesModal={setPicturesModal}
                                />
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