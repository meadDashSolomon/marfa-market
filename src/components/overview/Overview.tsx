import ProductInfo from './subcomponents/ProductInfo';
import ProductOverview from './subcomponents/ProductOverview';
import ImgGallery from './subcomponents/ImgGallery';
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

  const [itemInfo, setItemInfo] = useState({});
  const [itemStyles, setItemStyles] = useState([]);
  const [itemStylePhotos, setItemSylePhotos] = useState([]);

  useEffect(() => {
    const getItemInfo = (id) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, {
        headers: {
          Authorization: import.meta.env.VITE_AUTH_TOKEN
        }
      })
      .then((response) => {
        setItemInfo(response.data.features)
      })
      .catch((error) => {
        console.log('ERROR GETTING ITEM INFO:::::', error)
      })
    }

    const getItemStyles = (id) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, {
        headers: {
          Authorization: import.meta.env.VITE_AUTH_TOKEN
        }
      })
      .then((response) => {
        console.log("picssssss:::::", response.data.results[0].photos)
        setItemStyles(response.data.results)
        setItemSylePhotos(response.data.results[0].photos)

      })
      .catch((error) => {
        console.log('ERROR GETTING PRODUCT STYLES:::::::::::', error)
      })
    }

    if (id) {
      getItemInfo(id);
      getItemStyles(id);
    }
  }, [id]);




  return (
    <div className='container'>
      <ImgGallery itemStylePhotos={itemStylePhotos}/>
      <ProductInfo itemArray={itemArray}/>
      {/* <StyleSelector />
      <AddToCart /> */}
      <ProductOverview slogan={slogan} description={description}/>
    </div>
  );
}

export default Overview;