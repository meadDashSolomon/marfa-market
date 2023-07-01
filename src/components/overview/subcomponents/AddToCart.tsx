import { useEffect, useState } from 'react';
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
    if (selectedSize === "Select a Size") {
      setShowSizeWarning(true);
    }
  }

  useEffect(() => {
    if (showSizeWarning === true) {
      setShowSizeWarning(false);
    }
  }, [selectedSize])

  //  helper function that checks if all sizes out of stock for conditionally rendering Add To Cart button
  const allOutOfStock = Object.values(skus).every((sku) => {
    sku.quantity === 0;
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
            // create array with a range of numbers from one to the lesser of selectedItem quantity and 15
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
              // Sequence generator function (commonly referred to as "range")
              // array.from method creates arrays from array-like objects
              // first arg is the array-like object
              // array-like objs have length properties
              // create object with key of length and value equal to the lesser of selectedItem quantity and 15
            Array.from({ length: Math.min(selectedItem.quantity, 15) },
            // fill array with numbers from 1 to the length of the array.
            // second arg is mapFn, invoked for every element in array-like obj
              // mapFn takes 2 args
                // 1. current element, not used here so _ is a placeholder
                // 2. index of current element proccessed in the array
              // take index of current element, add one to it, make that the next element in the new array
            (_, i) => i + 1).map((value) => {
              // For each number in the array, create an option with that number
              return <option key={value} value={value}>{value}</option>
            })
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