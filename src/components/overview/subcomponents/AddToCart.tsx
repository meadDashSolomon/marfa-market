import { useState } from 'react';

const AddToCart = ({skus}) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [showSizeWarning, setShowSizeWarning] = useState(false);

  // find sku that corresponds to selected size
  const selectedSku = Object.values(skus).find((sku) => {
    sku.size === selectedSize
  })

  // define func to handle add to cart btn click
  const handleAddToCart = () => {
    if (selectedSize === "") {
      setShowSizeWarning(true);
    }
  }

  return (
    <div className="addToCartContainer">
      {/* if showSizeWarning is true, show size warning message */}
      {showSizeWarning && <p>Please select size</p>}
      <select
      className="sizeSelector"
      value={selectedSize}
      onChange={(e) => setSelectedSize(e.target.value)}>
        <option value="">Select Size</option>
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