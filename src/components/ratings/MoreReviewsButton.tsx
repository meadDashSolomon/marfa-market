// @ts-nocheck

const MoreReviewsButton = ({ displayMore }) => {

  const handleClick = () => {
    displayMore();
    //something
  };

  return (
    <div>
      <button onClick={handleClick}>More Reviews</button>
    </div>
  )
}

export default MoreReviewsButton;
