import ProductInfo from './subcomponents/ProductInfo';
import ProductOverview from './subcomponents/ProductOverview';
import ImgGallery from './subcomponents/ImgGallery';
import StyleSelector from './subcomponents/StyleSelector';
import AddToCart from './subcomponents/AddToCart';
import {useState, useEffect} from 'react';
import axios from 'axios';

type OverviewProps = {
  itemArray: object[] | string;
  description: string;
  slogan: string;
  id: number;
};

 const Overview = ({ itemArray, description, slogan, id }: OverviewProps) => {
  console.log("itemArray:::::::::::", itemArray);

  const [skus, setSkus] = useState([]);
  const [itemStylePhotos, setItemSylePhotos] = useState([]);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);


  useEffect(() => {
    const getSkus = (id) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, {
        headers: {
          Authorization: import.meta.env.VITE_AUTH_TOKEN
        }
      })
      .then((response) => {
        console.log("SKUSSSSS?????????????:::::", response.data.results[0].skus)
        setSkus(response.data.results[0].skus);
        setItemSylePhotos(response.data.results[0].photos);
        setStyles(response.data.results);
      })
      .catch((error) => {
        console.log('ERROR GETTING PRODUCT STYLES:::::::::::', error)
      })
    }

    if (id) {
      getSkus(id);
    }
  }, [id]);




  return (
    <div className='container'>
      <ImgGallery itemStylePhotos={itemStylePhotos}/>
      <ProductInfo itemArray={itemArray} selectedStyle={selectedStyle}/>
      <StyleSelector styles={styles} setSelectedStyle={setSelectedStyle} />
      <AddToCart skus={skus}/>
      <ProductOverview slogan={slogan} description={description}/>
    </div>
  );
}

export default Overview;