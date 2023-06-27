const ProductInfo = () => {
  // pass in prop with number of reviews
    // let areReviews = reviews.length
  return (
    <div className="ProductInfoContainer">
      {/* {
        areReviews ? <div className="starRating"> <img classname="stars" src="" alt="stars" /> <p>Read all reviews</p> </div> : <></>
      } */}
      <p className="category">Category</p>
      <h1>Expanded Product Name</h1>
      <h6>$369</h6>
    </div>
  )
}

export default ProductInfo;