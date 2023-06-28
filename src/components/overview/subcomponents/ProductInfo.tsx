const ProductInfo = ({ itemArray, selectedStyle }) => {
  const originalPrice = selectedStyle ? selectedStyle.original_price : itemArray[0].default_price;
  const salePrice = selectedStyle && selectedStyle.sale_price !== "0" ? selectedStyle.sale_price : null;

  return (
    <div className="productInfoContainer">
      {/* {
        areReviews ? <div className="starRating"> <img classname="stars" src="" alt="stars" /> <p>Read all reviews</p> </div> : <></>
      } */}
      <p className="reviews">REVIEWS PLACEHOLDER</p>
      {itemArray.length > 0 && (
        <>
          <p className="category">{itemArray[0].category}</p>
          <h1>{itemArray[0].name}</h1>
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