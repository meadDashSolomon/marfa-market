import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ImgGallery = ({itemStylePhotos}) => {

const mainPicURL = itemStylePhotos[0] ? itemStylePhotos[0].url : "";

  return (
    <div className="imgContainer">
      <img className="mainPic" src={mainPicURL} alt="main picture of currently selected style" />
      <div className="thumbnails">
        {itemStylePhotos.map((photo, index) => {
          return <img className="thumbnail" key={index} src={photo.thumbnail_url} alt="thumbnail" />
        })}
        <KeyboardArrowDownIcon className='thumbnailDownArrow' />
      </div>
      <KeyboardArrowLeftIcon className='mainPicArrowLeft' />
      <KeyboardArrowRightIcon className='mainPicArrowRight' />
    </div>
  )
}


export default ImgGallery;