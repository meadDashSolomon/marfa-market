import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState, useEffect } from 'react';

const ImgGallery = ({ selectedStyle }) => {
  const [itemStylePhotos, setItemSylePhotos] = useState([{url: ''}]);
  const [mainPicURL, setMainPicURL] = useState("");


  const handleThumbnailClick = (url) => {
    setMainPicURL(url);
  }
  useEffect(() => {
    setMainPicURL(itemStylePhotos[0].url || '');
  }, [itemStylePhotos])
  useEffect(() => {
    setItemSylePhotos(selectedStyle.photos);
  }, [selectedStyle]);

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