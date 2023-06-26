// @ts-ignore
import React from 'react';
import ProductInfo from './subcomponents/ProductInfo';
import ProductOverview from './subcomponents/ProductOverview';

 const Overview = () => {
  return (
    <div className='container'>
      <ProductInfo />
      {/* <StyleSelector />
      <AddToCart />
      <ImgGallery /> */}
      <ProductOverview />
    </div>
  );
}

// const testComponent = ({ data }) => { // data: []

//   if (data.length < 1) {
//     return (
//       <div>
//         Loading...
//       </div>
//     )
//   }

//   return (
//     <div>
//       Hello
//     </div>
//   )
// }

export default Overview;