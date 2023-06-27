const ImgGallery = ({itemStylePhotos}) => {

const mainPicURL = itemStylePhotos[0].url;

  return (
    <div className="imgContainer">
      <img src={mainPicURL} alt="main picture of currently selected style" />
      <div className="thumbnails">
        {itemStylePhotos.map((photo, index) => {
          return <img key={index} src={photo.thumbnail_url} alt="thumbnail" />
        })}
      </div>
    </div>
  )
}


export default ImgGallery;