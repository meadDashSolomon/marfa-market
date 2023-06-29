import ProductInfo from "./subcomponents/ProductInfo";
import ProductOverview from "./subcomponents/ProductOverview";
import ImgGallery from "./subcomponents/ImgGallery";
import StyleSelector from "./subcomponents/StyleSelector";
import AddToCart from "./subcomponents/AddToCart";
import { useState, useEffect } from "react";
import axios from "axios";

type OverviewProps = {
  itemArray: object[] | string;
  description: string;
  slogan: string;
  id: number;
  currentItem: object;
  setCurrentItem: Function;
};

const defaultStyle = {
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
};

const Overview = ({
  itemArray,
  currentItem,
  setCurrentItem,
  description,
  slogan,
  id,
}: OverviewProps) => {
  const [skus, setSkus] = useState([]);
  const [itemStylePhotos, setItemSylePhotos] = useState([]);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(defaultStyle);

  return (
    <div className="container">
      <div className="topContainer">
        <ImgGallery selectedStyle={selectedStyle} />
        <div className="topRightContainer">
          <ProductInfo itemArray={itemArray} selectedStyle={selectedStyle} />
          <StyleSelector
            currentItem={currentItem}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
          <AddToCart skus={selectedStyle.skus} />
        </div>
      </div>
      <div className="bottomContainer">
        <ProductOverview
          slogan={currentItem.slogan}
          description={currentItem.description}
        />
      </div>
    </div>
  );
};

export default Overview;