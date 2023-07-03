import { CardContent, Modal, Typography } from "@mui/joy";
import { Box, Card, Fade, Button } from "@mui/material";
// import {useState} from "react"
// import axios from "axios";

type AnswerPicturesModalProps = {
    setPictures:(value:[])=> void;
    picturesModal: boolean;
    setPictuesModal: (value:boolean) => void;
}

export default function AnswerPicturesModal (props:AnswerPicturesModalProps) {

    return (
        <Box>
            <Modal
                className = {'Questions AnswersModal'}
                open={props.picturesModal}
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
        </Box>
    )
}