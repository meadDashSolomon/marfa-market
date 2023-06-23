// @ts-nocheck

const AddMoreReviewsButton = ({ setIsWriting }) => {

  const handleClick = () => {
    setIsWriting(true);
  }
  return (
    <div>
      <button onClick={handleClick}>Add A Review</button>
    </div>
  )
}

export default AddMoreReviewsButton;
