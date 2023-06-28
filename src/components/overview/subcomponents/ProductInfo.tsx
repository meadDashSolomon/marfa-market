const ProductInfo = ({ itemArray, selectedStyle }) => {
  const price = selectedStyle ? selectedStyle.original_price : itemArray[0].default_price;

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
          <p className="price">{price}</p>
        </>
      )}
    </div>
  )
}

export default ProductInfo;