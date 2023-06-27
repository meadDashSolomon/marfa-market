// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Documentation on Modal: https://mui.com/material-ui/react-modal/

import axios from "axios";
import { useState } from "react";
import { Box, Fade, Modal, Card, Divider, CardContent, Rating, Button, TextField, Stack, Checkbox, FormControlLabel } from "@mui/material"
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

const NewReview = ({setIsWriting, isWriting}) => {

  const [addingPhotos, setAddingPhotos] = useState(false)

  const handleClose = () => {
    setIsWriting(false);
  }

  const handleChildClose = () => {
    setAddingPhotos(false);
  }

  const handlePhotoSubmission = () => {
    console.log(e.target.value)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: 'max-content',
    maxWidth: '100%',
    width: "650px",
    mx: 'auto',
    transform: 'translate(-50%, -50%)',
    p: 2,
    bgcolor: 'background.paper'
  }

  const ChildModal = () => {
    return (
      <Box>
        <Modal
        open={addingPhotos}
        onClose={handleChildClose}>
          <Fade in={isWriting}>
            <Card variant="outlined" sx={style}>
              <CardContent>
              <FormControl>
                <FormLabel>Enter Photo Url:</FormLabel>
                <Input onChange={(e) => console.log(e.target.value)}/>
                <Button onClick={handlePhotoSubmission} sx={{
                  marginTop: "10px",
                  color: "#525252"
                }}>Submit</Button>
              </FormControl>
              </CardContent>
            </Card>
          </Fade>
        </Modal>
      </Box>
    )
  }


  return (
    <Box>
      <Modal
      open={isWriting}
      onClose={handleClose}>
        <Fade in={isWriting}>
          <Card variant="outlined" sx={style}>
            <Typography
            level="h2"
            fontSize="xl"
            sx={{
              marginBottom: "8px"
            }}
            >Write Your Review</Typography>
            <Divider inset="none"/>
            <CardContent>
              <Typography
              level="body2"
              textColor="#25252D"
              sx={{
                marginBottom: "5px"
              }}>Overall Rating:</Typography>
              <Rating
              sx={{
                fontSize: "25px",
                color: "#525252"
              }}></Rating>
              <Typography level="body3" textColor="#25252D">Click to rate</Typography>
              <Divider sx={{ marginY: "10px" }}/>
              <Stack direction="row" spacing="50px">
                <FormControl>
                  <FormLabel>Name: </FormLabel>
                  <TextField multiline='true' onChange={(e) => console.log(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Email: </FormLabel>
                  <TextField multiline='true' onChange={(e) => console.log(e.target.value)}/>
                </FormControl>
              </Stack>
              <FormControl sx={{ marginY: "10px" }}>
                <FormLabel>Summary:</FormLabel>
                <TextField multiline='true' onChange={(e) => console.log(e.target.value)}/>
              </FormControl>
              <FormControl>
                <FormLabel>Product Review: </FormLabel>
                <TextField multiline='true'
                onChange={(e) => console.log(e.target.value)}/>
              </FormControl>
              <Stack direction="row" alignItems="center" marginTop="8px">
                <Checkbox/>
                <Typography>Recommend</Typography>
              </Stack>
              <Button onClick={() => setAddingPhotos(true)}
              variant="outlined"
              sx={{
                borderColor: "#e8e4e4",
                color: "#525252",
                marginTop: "12px"
                }}>Add Photo</Button>
              {addingPhotos ? <ChildModal/> : null}
              {/* {photos.length > 1 ? <Box>Hello</Box> : null} */}
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </Box>
  )
}

//   product_id	integer	w for
// rating	int	Integer (1
// summary	text
// body	text
// recommend	bool
// name	text
// email	text
// photos	[text]	Array
// characteristics	object

export default NewReview;