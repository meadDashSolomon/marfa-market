const ProductInfo = () => {
  // pass in prop with number of reviews
    // let areReviews = reviews.length
  return (
    <div className="productInfoContainer">
      {/* {
        areReviews ? <div className="starRating"> <img classname="stars" src="" alt="stars" /> <p>Read all reviews</p> </div> : <></>
      } */}
      <p className="reviews">REVIEWS PLACEHOLDER</p>
      <p className="category">Category</p>
      <h1>Expanded Product Name</h1>
      <p className="price">$369</p>
    </div>
  )
}

export default ProductInfo;