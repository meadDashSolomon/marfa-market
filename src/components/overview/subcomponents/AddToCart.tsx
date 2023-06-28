const AddToCart = () => {


  return (
    <div className="addToCartContainer">
      <select className="sizeSelector">
        <option value="">Select Size</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>

      <select className="quantitySelector">
        <option value="">Select Quantity</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button className="addToCartButton">Add to Cart</button>
      <button className="starButton">★</button>
    </div>
  )
}

export default AddToCart;