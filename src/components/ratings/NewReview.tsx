// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Documentation on Modal: https://mui.com/material-ui/react-modal/

import axios from "axios";
import { useState } from "react";
import { Box, Fade, Modal, Card, Divider, CardContent, Rating, Button } from "@mui/material"
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
                <Button onClick={handlePhotoSubmission} sx={{color: "#525252"}}>Submit</Button>
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
            <Typography level="h2" fontSize="xl">Write Your Review</Typography>
            <Divider inset="none"/>
            <CardContent>
              <Typography level="body1">Overall Rating</Typography>
              <Rating size="small"></Rating>
              <Typography level="body3">Click to rate</Typography>
              <Divider/>
              <FormControl>
                <FormLabel>Summary</FormLabel>
                <Input onChange={(e) => console.log(e.target.value)}/>
              </FormControl>
              <FormControl>
                <FormLabel>Product Review</FormLabel>
                <Input onChange={(e) => console.log(e.target.value)}/>
              </FormControl>
              <Button onClick={() => setAddingPhotos(true)} sx={{color: "#525252"}}>Add Photo</Button>
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