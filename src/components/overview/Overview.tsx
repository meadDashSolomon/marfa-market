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

  const [productFeatures, setProductFeatures] = useState({});
  const [skus, setSkus] = useState([]);
  const [itemStylePhotos, setItemSylePhotos] = useState([]);

  useEffect(() => {
    const getProductFeatures = (id) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, {
        headers: {
          Authorization: import.meta.env.VITE_AUTH_TOKEN
        }
      })
      .then((response) => {
        setProductFeatures(response.data.features)
      })
      .catch((error) => {
        console.log('ERROR GETTING ITEM INFO:::::', error)
      })
    }

    const getSkus = (id) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, {
        headers: {
          Authorization: import.meta.env.VITE_AUTH_TOKEN
        }
      })
      .then((response) => {
        console.log("SKUSSSSSSsssss:::::", response.data.results[1])
        setSkus(response.data.results[1])
        setItemSylePhotos(response.data.results[0].photos)

      })
      .catch((error) => {
        console.log('ERROR GETTING PRODUCT STYLES:::::::::::', error)
      })
    }

    if (id) {
      getProductFeatures(id);
      getSkus(id);
    }
  }, [id]);




  return (
    <div className='container'>
      <ImgGallery itemStylePhotos={itemStylePhotos}/>
      <ProductInfo itemArray={itemArray}/>
      <StyleSelector itemStylePhotos={itemStylePhotos}/>
      <AddToCart skus={skus}/>
      <ProductOverview slogan={slogan} description={description}/>
    </div>
  );
}

export default Overview;