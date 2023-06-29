import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from "axios";
const defaultStyle = {
  product_id: "1",
  results: [
    {
      style_id: 1,
      name: "Loading . . .",
      original_price: "0",
      sale_price: "0",
      "default?": false,
      photos: [
        {
          thumbnail_url: "",
          url: "",
        },
      ],
      skus: {},
    },
  ],
};

const StyleSelector = ({ currentItem, selectedStyle, setSelectedStyle }) => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    let id = currentItem.id;
    if (id !== 0) {
      axios
        .get(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentItem.id}/styles`,
          {
            headers: {
              Authorization: import.meta.env.VITE_AUTH_TOKEN,
            },
          }
        )
        .then((response) => {
          setStyles(response.data.results);
          setSelectedStyle(response.data.results[0]);
        })
        .catch((error) => {
          console.log("ERROR GETTING PRODUCT STYLES:::::::::::", error);
        });
    }
  }, [currentItem]);

  const handleStyleClick = (style) => {
    if (selectedStyle !== style) {
      setSelectedStyle(style);
    }
  }

  return (
    <div className="styleSelectorContainer">
      <div className="styleText">
        <p className="styleArrow">{"Style  >"}</p>
        <p className="selectedStyle">{selectedStyle.name}</p>
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