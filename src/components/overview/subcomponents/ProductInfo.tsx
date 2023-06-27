const ProductInfo = () => {
  // pass in prop with number of reviews
    // let areReviews = reviews.length
  return (
    <div className="ProductInfoContainer">
      {/* {
        areReviews ? <div className="starRating"> <img classname="stars" src="" alt="stars" /> <p>Read all reviews</p> </div> : <></>
      } */}
      <h5>Category</h5>
      <h2>Expanded Product Name</h2>
      <h6>$369</h6>
    </div>
  )
}

export default ProductInfo;