import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState, useEffect } from 'react';

const ImgGallery = ({ selectedStyle }) => {
  const [itemStylePhotos, setItemSylePhotos] = useState([{url: ''}]);
  const [mainPicURL, setMainPicURL] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [highlightedThumbnail, setHighlightedThumbnail] = useState(0)


  const handleThumbnailClick = (url, index) => {
    setMainPicURL(url);
    setSelectedImageIndex(index);
    setHighlightedThumbnail(index);
  }

  useEffect(() => {
    setItemSylePhotos(selectedStyle.photos);
    if (selectedStyle.photos[selectedImageIndex]) {
      setMainPicURL(selectedStyle.photos[selectedImageIndex].url);
    } else {
      setMainPicURL('');
    }
  }, [selectedStyle, selectedImageIndex]);

  const handleNextClick = () => {
    setSelectedImageIndex((prevSelectedImageIndex) => {
      return (prevSelectedImageIndex + 1) % itemStylePhotos.length;
    });
    setHighlightedThumbnail((prevHighlightedThumbnail) => {
      return (prevHighlightedThumbnail + 1) % itemStylePhotos.length;
    });
  }

  const handlePrevClick = () => {
    setSelectedImageIndex((prevSelectedImageIndex) => {
      return (prevSelectedImageIndex - 1 + itemStylePhotos.length) % itemStylePhotos.length;
    });
    setHighlightedThumbnail((prevHighlightedThumbnail) => {
      return (prevHighlightedThumbnail - 1 + itemStylePhotos.length) % itemStylePhotos.length;
    });
  }

  return (
    <div className="imgContainer">
      {itemStylePhotos.length > 0 ? (
        <>
          <div className="mainPicWrapper">
            <img className="mainPic" src={mainPicURL} alt="main picture of currently selected style" />
          </div>
          <div className="thumbnails">
            {itemStylePhotos.map((photo, index) => {
              return (
                <img
                  className={`thumbnail ${index === highlightedThumbnail ? 'selectedThumbnail' : ''}`}
                  key={index}
                  src={photo.thumbnail_url}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(photo.url, index)}
                />
              )
            })}
            <KeyboardArrowDownIcon className='thumbnailDownArrow' />
          </div>
          <KeyboardArrowLeftIcon className='mainPicArrowLeft' onClick={handlePrevClick} />
          <KeyboardArrowRightIcon className='mainPicArrowRight' onClick={handleNextClick} />
        </>
      ) : (
        <p>No photos available.</p>
      )}
    </div>
  )
}


export default ImgGallery;