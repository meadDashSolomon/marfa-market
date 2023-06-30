import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useState, useEffect } from 'react';

const ImgGallery = ({ selectedStyle }) => {
  const [itemStylePhotos, setItemSylePhotos] = useState([{url: ''}]);
  const [mainPicURL, setMainPicURL] = useState("");
  // keep track of which image is selected for scrolling and highlighting
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  // keep track of first image to limit shown thumbnails to 7
  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

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
      const newIndex = (prevSelectedImageIndex + 1) % itemStylePhotos.length;
      // if the next image is not visible, scroll thumbnails
      if (newIndex >= firstImageIndex + 7) {
        setFirstImageIndex(firstImageIndex + 1);
      }
      return newIndex;
    });
  }

  const handlePrevClick = () => {
    setSelectedImageIndex((prevSelectedImageIndex) => {
      const newIndex = (prevSelectedImageIndex - 1 + itemStylePhotos.length) % itemStylePhotos.length;
      // if next image is not visible, scroll thumbnails
      if (newIndex < firstImageIndex) {
        setFirstImageIndex(firstImageIndex + 1);
      }
      return newIndex;
    });
  }

  const updateArrowKeyClasses = () => {
    const leftArrow = document.querySelector('.mainPicArrowLeft');
    const rightArrow = document.querySelector('.mainPicArrowRight');
    const mainPic = document.querySelector('.mainPic');

    if (isFullscreen) {
      mainPic.classList.remove('mainPicFullscreen');
      leftArrow.classList.remove('mainPicArrowLeftFullscreen');
      rightArrow.classList.remove('mainPicArrowRightFullscreen');
    } else {
      mainPic.classList.add('mainPicFullscreen')
      leftArrow.classList.add('mainPicArrowLeftFullscreen');
      rightArrow.classList.add('mainPicArrowRightFullscreen');
    }
  }

  const handleFullscreenClick = () => {
    setIsFullscreen(!isFullscreen);
    setIsExpanded(!isExpanded);

    updateArrowKeyClasses();
  };

  const handleMainPicClick = () => {
    if (!isFullscreen) {
      setIsFullscreen(!isFullscreen);
      setIsExpanded(!isExpanded);
      updateArrowKeyClasses();
    } else {
      handleZoomClick();
    }
  };

  const handleUpClick = () => {
    setFirstImageIndex((prevFirstImageIndex) => {
      if (prevFirstImageIndex <= 0) {
        return 0;
      }
      return prevFirstImageIndex -1;
    });
  };

  const handleDownClick = () => {
    setFirstImageIndex((prevFirstImageIndex) => {
      // don't scroll visible thumnails beyond 7 less than number of thumbnails
      if (prevFirstImageIndex >= itemStylePhotos.length - 7) {
        return prevFirstImageIndex;
      }
      return prevFirstImageIndex + 1;
    });
  };

  const handleThumbnailClick = (url, index) => {
    setMainPicURL(url);
    // highlighting and scrolling
    setSelectedImageIndex(index);
  }

  const handleZoomClick = () => {
    if (isExpanded) {
      // react keyword for previous state
      setZoomLevel(prevZoomLevel => prevZoomLevel === 1 ? 2.5 : 1);
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
            <img className={`mainPic ${isExpanded ? 'crosshairCursor' : ''} ${zoomLevel === 2.5 ? 'zoomOutCursor' : ''}`}
                 src={mainPicURL}
                 alt="main picture of currently selected style"
                 style={{ width: '100%', height: '100%', objectFit: 'contain', transform: `scale(${zoomLevel})` }}
                 onClick={handleMainPicClick}
                 />
            <FullscreenIcon className='fullscreenIcon'
                            style={{ position: 'absolute', top: '10px', right: '100px', color: 'white', zIndex: '2', }}
                            onClick={handleFullscreenClick} />
          </div>
          <div className={`thumbnails ${isExpanded ? 'thumbnailsExpanded' : ''}`}>
            {itemStylePhotos.length > 7 && (
              <>
                <KeyboardArrowUpIcon className='thumbnailUpArrow' onClick={handleUpClick} />
              </>
            )}
            {itemStylePhotos.slice(firstImageIndex, firstImageIndex + 7).map((photo, index) => {
              return (
                <img
                  className={
                    // its a thumbnail
                    // is it the selected thumbnail?
                    // is the mainPic expanded?
                    // is the small thumbnail selected?
                    `thumbnail
                    ${index + firstImageIndex === selectedImageIndex ?
                       'selectedThumbnail' : ''}
                     ${isExpanded ?
                       'smallIcon' : ''}
                     ${index === selectedImageIndex && isExpanded ?
                       'selectedIconExpanded' : ''}`}
                  key={index}
                  src={photo.thumbnail_url}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(photo.url, index)}
                />
              )
            })}
            {itemStylePhotos.length > 7 && (
              <>
                <KeyboardArrowDownIcon className='thumbnailDownArrow' onClick={handleDownClick}/>
              </>
            )}
          </div>
          {selectedImageIndex > 0 && (
            <KeyboardArrowLeftIcon className='mainPicArrowLeft' onClick={handlePrevClick} />
          )}
          {selectedImageIndex < itemStylePhotos.length -1 && (
            <KeyboardArrowRightIcon className='mainPicArrowRight' onClick={handleNextClick} />
          )}
        </>
      ) : (
        <p>No photos available.</p>
      )}
    </div>
  )


}


export default ImgGallery;