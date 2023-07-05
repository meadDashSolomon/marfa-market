import { Box } from "@mui/material";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { useState, useRef } from "react";
import { Menu, MenuItem } from "@mui/joy";
import { Stack } from '@mui/material'

interface ReviewPhotoProps {
  photos: Photo[]
}

interface Photo {
  id: number,
  url: string
}

const ReviewPhotos = ({ photos }: ReviewPhotoProps) => {
  const buttonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box>
      {photos.length < 1 ? (null) :
      <Box>
        <PhotoLibraryIcon ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          marginTop: "8px"
        }}/>
        <Menu
        anchorEl={buttonRef.current}
        placement="right"
        open={isOpen}>
          <Stack direction="row">
          {photos.map((photo, index) =>
          <MenuItem
          key={index}>
            <Box component='img' key={index}
            sx={{
              border: '1px solid grey',
              borderRadius: '10px',
              boxShadow: "0px 1px 6px #e0e0e0",
              display: 'flex',
              flexDirection: 'row',
              height: 100,
              width: 'auto'
            }}
            src={photo.url}></Box>
          </MenuItem>)}
          </Stack>
        </Menu>
      </Box>
      }
    </Box>
    );
}

export default ReviewPhotos;