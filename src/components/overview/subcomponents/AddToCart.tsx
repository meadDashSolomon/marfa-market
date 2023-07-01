import { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

const AddToCart = ({skus}) => {
  const [selectedSize, setSelectedSize] = useState("Select a Size");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [showSizeWarning, setShowSizeWarning] = useState(false);
  const [starFilled, setStarFilled] = useState(false);
  const [availableQuantitiesArray, setAvailableQuantitiesArray] = useState([]);

  // define func to handle add to cart btn click
  const handleAddToCart = () => {
    // if no size selected, show size warning
    if (selectedSize === "Select a Size") {
      setShowSizeWarning(true);
    }
  }

  useEffect(() => {
    if (showSizeWarning === true) {
      setShowSizeWarning(false);
    }

  if (selectedItem) {
    // create variable set to the lesser of total quantity and 15
    const availableQuantity = Math.min(selectedItem.quantity, 15)
      // create range of available quantities array
    const quantities = [];
    // iterate available quantity number of times
    for (var i = 0; i < availableQuantity; i++) {
      // push index plus one to array
      quantities.push(i+1);
  }
  setAvailableQuantitiesArray(quantities);
  }

  }, [selectedSize])

  //  helper function that checks if all sizes out of stock for conditionally rendering Add To Cart button
  const allOutOfStock = Object.values(skus).every((sku) => {
    return sku.quantity === 0;
  })

  return (
    <div className="addToCartContainer">
      {/* if showSizeWarning is true, show size warning message */}
      {showSizeWarning && <p>Please select size</p>}
      <div className="selectors">
        <select
          className="sizeSelector"
          value={selectedSize}
          onChange={(e) => {
            const size = e.target.value;
            setSelectedSize(size);
            // helper function to set quantity based on size's sku
            // create item variable
            // find item in skus object that's size property matches selected size
            const item = size === "Select a Size" ? null : Object.values(skus).find(sku => sku.size === size);
            setSelectedItem(item);
          }}
          disabled={allOutOfStock}
        >
          {/* disable select a size option after a size is selected */}
          <option disabled={selectedSize !== "Select a Size"}>Select a Size</option>
          {allOutOfStock ? (
            <option value="OUT OF STOCK">OUT OF STOCK</option>
          ) : (
            Object.entries(skus).map(([key, sku]) => {
              // only list sizes currently in stock
              if (sku.quantity > 0) {
                return <option
                          key={key}
                          value={sku.size}>
                            {sku.size}
                          </option>
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
            availableQuantitiesArray.map((quantity, index) => (
              <option key={index} value={quantity}>{quantity}</option>
            ))
          )}
        </select>
      </div>
      <div className="addToCartBtns">
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
    </div>
  )
}

export default AddToCart;