import { CardContent, FormControl, Modal, Typography } from "@mui/joy";
import { Card, Fade, Button, FormLabel, TextField } from "@mui/material";
// import {useState} from "react"
// import axios from "axios";

type AnswerPicturesModalProps = {
    pictures:string[];
    setPictures:(value:[]) => void;
    picturesModal: boolean;
    setPictuesModal: (value:boolean) => void;
}


export default function AnswerPicturesModal (props:AnswerPicturesModalProps) {

    const handleClose = () => {//closes the modal
        props.setPictuesModal(false);
    }

    const picturesArray:string[] = [];
    const validPicture = new RegExp('^(http(s?):)([/.\\w\\s-])*.(?:jpg|gif|png)', 'i')

    return (
            <Modal
                className = {'Questions Modal'}
                open={props.picturesModal}
                onClose={handleClose}
            >
                <Fade in = {props.picturesModal}>
                    <Card
                    variant="outlined"
                    className = {'Questions Modal'}
                    >
                        <Typography
                            level="h2"
                            fontSize="x1"
                        >Please Input your Pictures</Typography>
                        <CardContent>
                            <FormControl>
                                <FormLabel>Pictures</FormLabel>
                                <TextField
                                name="picture1"
                                defaultValue={''}
                                />
                            <Button
                                onClick={(e)=> {
                                    console.log(1)
                                }}
                            >Add Picture</Button>
                            </FormControl>
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