import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useState, useEffect } from 'react';

const ImgGallery = ({ selectedStyle }) => {
  const [itemStylePhotos, setItemSylePhotos] = useState([{url: ''}]);
  const [mainPicURL, setMainPicURL] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [highlightedThumbnail, setHighlightedThumbnail] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleFullscreenClick = () => {
    setIsFullscreen(!isFullscreen);
    setIsExpanded(!isExpanded);

    const leftArrow = document.querySelector('.mainPicArrowLeft');
    const rightArrow = document.querySelector('.mainPicArrowRight');
    const mainPic = document.querySelector('.mainPic');

    if (isFullscreen) {
      mainPic.classList.remove('mainPicFullscreen');
      leftArrow.classList.remove('mainPicArrowLeftFullscreen');
      rightArrow.classList.remove('mainPicArrowRightFullscreen');
    } else {
      mainPic?.classList.add('mainPicFullscreen')
      leftArrow.classList.add('mainPicArrowLeftFullscreen');
      rightArrow.classList.add('mainPicArrowRightFullscreen');
    }
  };



  return (
    <div className="imgContainer">
      {itemStylePhotos.length > 0 ? (
        <>
          <div className="mainPicWrapper"
               style={{
                 width: isFullscreen ? '100vw' : 'auto',
                 height: isFullscreen ? '100vh' : 'auto',
               }}>
            <img className="mainPic"
                 src={mainPicURL}
                 alt="main picture of currently selected style"
                 style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
            <FullscreenIcon className='fullscreenIcon'
                            style={{ position: 'absolute', top: '10px', right: '100px', color: 'white', zIndex: '2', }}
                            onClick={handleFullscreenClick} />
          </div>
          <div className={`thumbnails ${isExpanded ? 'thumbnailsExpanded' : ''}`}>
            {itemStylePhotos.map((photo, index) => {
              return (
                <img
                  className={`thumbnail ${index === highlightedThumbnail ? 'selectedThumbnail' : ''} ${isExpanded ? 'smallIcon' : ''} ${index === selectedImageIndex && isExpanded ? 'selectedIconExpanded' : ''}`}
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