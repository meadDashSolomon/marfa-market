// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Documentation on Modal: https://mui.com/material-ui/react-modal/
import axios from 'axios';
import { useState } from 'react';
import { Box, Fade, Modal, Card, Divider, CardContent, Rating, Button, TextField, Stack, Checkbox, RadioGroup, FormControlLabel } from '@mui/material'
import { Typography, FormControl, FormLabel, Radio } from '@mui/joy';
import PhotosModal from './PhotosModal';
import characteristics from './Characteristics';
import CharacteristicsList from './CharacteristicsList';

const NewReview = ({setIsWriting, isWriting, productRatings}) => {

  console.log(productRatings)

  const [selectedValues, setSelectedValues] = useState({})
  const [addingPhotos, setAddingPhotos] = useState(false)
  const [photos, setPhotos] = useState([])

  const handleClose = () => {
    setIsWriting(false);
  }

  console.log('these shoud be the characteristics', productRatings.characteristics)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: 'max-content',
    maxWidth: '100%',
    width: '650px',
    mx: 'auto',
    transform: 'translate(-50%, -50%)',
    p: 2,
    bgcolor: 'background.paper'
  }

  // const sendReview = () => {
  //   axios.post()
  // }

  return (
    <Box>
      <Modal
      open={isWriting}
      onClose={handleClose}>
        <Fade in={isWriting}>
          <Card variant='outlined' sx={style}>
            <Typography
            level='h2'
            fontSize='xl'
            sx={{
              marginBottom: '8px'
            }}
            >Write Your Review</Typography>
            <Divider inset='none'/>
            <CardContent>
              <Typography
              level='body2'
              textColor='#25252D'
              sx={{
                marginBottom: '5px'
              }}>Overall Rating: *</Typography>
              <Rating
              sx={{
                fontSize: '25px',
                color: '#525252'
              }}></Rating>
              <Typography level='body3' textColor='#25252D'>Click to rate</Typography>
              <Divider sx={{ marginY: '10px' }}/>
              <Stack direction='row' spacing='50px'>
                <FormControl required={true}>
                  <FormLabel>Name: </FormLabel>
                  <TextField size='small' multiline={true} onChange={(e) => console.log(e.target.value)}/>
                </FormControl>
                <FormControl required='true'>
                  <FormLabel>Email: </FormLabel>
                  <TextField size='small' multiline={true} onChange={(e) => console.log(e.target.value)}/>
                </FormControl>
              </Stack>
              <FormControl sx={{ marginY: '10px' }}>
                <FormLabel>Summary:</FormLabel>
                <TextField size='small' multiline={true} onChange={(e) => console.log(e.target.value)}/>
              </FormControl>
              <FormControl required='true'>
                <FormLabel>Product Review: </FormLabel>
                <TextField rows='6'size='small' multiline={true}
                onChange={(e) => console.log(e.target.value)}/>
              </FormControl>
              <CharacteristicsList productRatings={productRatings} selectedValues={selectedValues} setSelectedValues={setSelectedValues}/>
              <Stack direction='row' alignItems='center' marginTop='8px'>
                <Checkbox/>
                <Typography> Do you recommend this product? *</Typography>
              </Stack>
              <Stack direction='row' spacing='20px' overflow='auto'>
              {photos.length > 0 ? photos.map((url) => {
                  console.log('url: ', url);
                  return (
                    <Box
                    component='img'
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: 100,
                      width: 'auto'
                    }}
                    src={url}></Box>
                  )}) : null}
              </Stack>
              <Button onClick={() => setAddingPhotos(true)}
              variant='outlined'
              sx={{
                borderColor: '#e8e4e4',
                color: '#525252',
                marginTop: '12px'
                }}>Add Photo</Button>
                <Box>
                  {addingPhotos ? <PhotosModal isWriting={isWriting} setAddingPhotos={setAddingPhotos} style={style} addingPhotos={addingPhotos} setPhotos={setPhotos}/> : null}
                </Box>
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