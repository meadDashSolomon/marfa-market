import { CardContent, Modal, Typography } from "@mui/joy";
import { Card, Fade, Button } from "@mui/material";
// import {useState} from "react"
// import axios from "axios";

type AnswerPicturesModalProps = {
    setPictures:(value:[])=> void;
    picturesModal: boolean;
    setPictuesModal: (value:boolean) => void;
}


export default function AnswerPicturesModal (props:AnswerPicturesModalProps) {
    const handleClose = () => {
        props.setPictuesModal(false);
    }
    
    return (
            <Modal
                className = {'Questions AnswersModal'}
                open={props.picturesModal}
                onClose={handleClose}
            >
                <Fade>
                    <Card variant="outlined">
                        <Typography>Please Input your Pictures</Typography>
                        <CardContent>
                            <Button
                                type="submit"
                                onClick={() => {
                                    props.setPictuesModal(false);
                                }}
                            >Submit</Button>
                        </CardContent>
                    </Card>
                </Fade>
            </Modal>
    )
}