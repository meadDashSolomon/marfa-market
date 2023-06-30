import axios from "axios";
import { useEffect, useState } from "react";
import fetchReviewMetaData from "./routes/reviewRoutes";

const ProductInfo = ({ itemArray, selectedStyle, id }) => {
  // state for number of reviews
  const [totalReviews, SetTotalReviews] = useState(0);

  // check for selected style
  const originalPrice = selectedStyle ?
    // if there's a selected style, then original price is the original price
    selectedStyle.original_price :
    // if no selected style, check if there's a selected item at all
    itemArray[0] ?
      // if yes, then original price is the default price for the first style
      itemArray[0].default_price :
      // if not, the original price is 0
      0;
  // conditionally render sale price if it's not 0
  const salePrice = selectedStyle && selectedStyle.sale_price !== "0" ? selectedStyle.sale_price : null;

  console.log("idddd::::::", id);
  useEffect(() => {
    if (id !== 0) {
      axios
        .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta',
        {
          headers: {
            Authorization: import.meta.env.VITE_AUTH_TOKEN,
          },
          params: {
            "product_id": id
          }
        }
      )
      .then((response) => {
          console.log("RES.RATINGS:::::::::::", response.data.ratings);
          let ratingsObject = response.data.ratings;
          let numberOfReviews = 0;
          for (const rating in ratingsObject) {
            numberOfReviews += parseInt(ratingsObject[rating]);
          }
          SetTotalReviews(numberOfReviews);
        })
      .catch((error) => {
        console.log("ERROR GETTING REVIEWS:::::::::::", error);
      });
    }
  }, [id]);

  return (
    <div className="productInfoContainer">
      <div className="reviews">
        <p className="reviewsLink">Read all {totalReviews} reviews</p>
        {/* stars § */}
      </div>
      {itemArray.length > 0 && (
        <>
          <p className="category">{itemArray[0].category}</p>
          <h1>{itemArray[0].name}</h1>
          {/* check if product is on sale */}
          {salePrice ? (
            <>
              <p className="price" style={{color: 'red'}}>{salePrice}</p>
              <p className="originalPrice" style={{textDecoration: 'line-through'}}>{originalPrice}</p>
            </>
          ) : (
            <p className="price">{originalPrice}</p>
          )}
        </>
      )}
    </div>
  )
}

export default ProductInfo;