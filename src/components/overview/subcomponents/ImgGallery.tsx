import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

const ImgGallery = ({itemStylePhotos}) => {
  const [mainPicURL, setMainPicURL] = useState(itemStylePhotos[0] ? itemStylePhotos[0].url : "");

  const handleThumbnailClick = (url) => {
    setMainPicURL(url);
  }

  return (
    <div className="imgContainer">
      {itemStylePhotos.length > 0 ? (
        <>
          <img className="mainPic" src={mainPicURL} alt="main picture of currently selected style" />
          <div className="thumbnails">
            {itemStylePhotos.map((photo, index) => {
              return (
                <img
                  className="thumbnail"
                  key={index}
                  src={photo.thumbnail_url}
                  alt="thumbnail"
                  onClick={() => handleThumbnailClick(photo.url)}
                />
              )
            })}
            <KeyboardArrowDownIcon className='thumbnailDownArrow' />
          </div>
          <KeyboardArrowLeftIcon className='mainPicArrowLeft' />
          <KeyboardArrowRightIcon className='mainPicArrowRight' />
        </>
      ) : (
        <p>No photos available.</p>
      )}
    </div>
  )
}


export default ImgGallery;