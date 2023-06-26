// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const Review = ({ review }) => {
  return (
    <div>
      <div>
        <span id='stars-rating'>Will be the stars component</span>
        <span>Verified Purchaser</span>
        <span>Username</span>
        <span>Date or review</span>
      </div>
      <h3 id='review-summary'>
        Review summary title
      </h3>
      <p id='review-body'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
      </p>
      <div>
        Recommends Product
      </div>
      <div>
        Response
      </div>
      <div>
        Helpful
      </div>
    </div>
  )
}

export default Review;