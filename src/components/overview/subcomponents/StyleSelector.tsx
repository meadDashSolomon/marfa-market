import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const StyleSelector = ({ styles, setSelectedStyle }) => {
  const [selectedStyle, setSelectedStyleState] = useState(null);

  useEffect(() => {
    if (styles.length > 0) {
      setSelectedStyleState(styles[0]);
      setSelectedStyle(styles[0]);
    }
  }, [styles]);

  const handleStyleClick = (style) => {
    if (selectedStyle !== style) {
      setSelectedStyleState(style);
      setSelectedStyle(style);
    }
  }

  const selectedStyleName = selectedStyle ? selectedStyle.name : "";

  return (
    <div className="styleSelectorContainer">
      <div className="styleText">
        <p className="styleArrow">{"Style  >"}</p>
        <p className="selectedStyle">{selectedStyleName}</p>
      </div>
      <div className="styleThumbnails">
        {styles.map((style, index) => {
          return (
            <div style={{position: 'relative'}} key={index}>
              <img
                className="styleThumbnail"
                onClick={() => handleStyleClick(style)}
                src={style.photos[0].thumbnail_url}
                alt={style.name}
              />
              {selectedStyle === style && (
                <CheckCircleOutlineIcon
                  style={{position: 'absolute', top: 0, left: 0, backgroundColor: 'transparent'}}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;