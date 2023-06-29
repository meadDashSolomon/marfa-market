import { useState } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

const AddToCart = ({skus}) => {
  const [selectedSize, setSelectedSize] = useState("Select a Size");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [showSizeWarning, setShowSizeWarning] = useState(false);
  const [starFilled, setStarFilled] = useState(false);

  // define func to handle add to cart btn click
  const handleAddToCart = () => {
    // if no size selected, show size warning
    if (selectedItem === "") {
      setShowSizeWarning(true);
    }
  }

  // check if all sizes out of stock
  const allOutOfStock = Object.values(skus).every((sku) => {
    sku.quantity === 0;
  })

  return (
    <div className="addToCartContainer">
      {/* if showSizeWarning is true, show size warning message */}
      {showSizeWarning && <p>Please select size</p>}

      <select
        className="sizeSelector"
        value={selectedSize}
        onChange={(e) => {
          const size = e.target.value;
          setSelectedSize(size);
          const item = size === "Select a Size" ? null : Object.values(skus).find(sku => sku.size === size);
          setSelectedItem(item);
        }}
        disabled={allOutOfStock}
      >
        <option disabled={selectedSize !== "Select a Size"}>Select a Size</option>
        {allOutOfStock ? (
          <option value="OUT OF STOCK">OUT OF STOCK</option>
        ) : (
          Object.values(skus).map((sku) => {
            // only list sizes currently in stock
            if (sku.quantity > 0) {
              return <option value={sku.size}>{sku.size}</option>
            }
          })
        )}
      </select>

      <select
        className="quantitySelector"
        value={selectedQuantity}
        onChange={(e) => setSelectedQuantity(e.target.value)}
        disabled={!selectedItem}
      >
        {!selectedItem ? (
          <option value="-">-</option>
        ) : (
          // If an item is selected, create an array from 1 to the minimum of the selected item's quantity or 15
          Array.from({ length: Math.min(selectedItem.quantity, 15) }, (_, i) => i + 1).map((value) => {
            // For each number in the array, create an option with that number
            return <option value={value}>{value}</option>
          })
        )}
      </select>

      <button
        className="addToCartButton"
        onClick={handleAddToCart}
        style={{display: allOutOfStock ? 'none': 'block'}}
      >
        Add to Cart
      </button>

      <button
        className="starButton"
        onClick={() => setStarFilled(!starFilled)}
      >
        {starFilled ? <FaStar /> : <FaRegStar />}
      </button>
    </div>
  )
}

export default AddToCart;