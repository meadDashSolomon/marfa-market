const StyleSelector = ({itemStylePhotos}) => {


  return (
    <div className="styleSelectorContainer">
      <div className="styleText">
        <p className="styleArrow">{"Style  >"}</p>
        <p className="selectedStyle">Selected Style</p>
      </div>
      <div className="styleThumbnails">
        {itemStylePhotos.map((photo, index) => {
          return <img className="styleThumbnail" key={index} src={photo.thumbnail_url} alt="thumbnail" />
        })}
      </div>
    </div>
  )
}

export default StyleSelector;