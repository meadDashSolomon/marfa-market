// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from 'react'
import { LinearProgress, Typography, Rating, Slider, Stack } from "@mui/material";

const Ratings = ({allReviews, setAllReviews}) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [totalReviews, getTotalReviews] = useState(0);
  const [sumReviews, getSumReviews] = useState(0);

  const [filterFive, setFilterFive] = useState(false);
  const [filterFour, setFilterFour] = useState(false);
  const [filterThree, setFilterThree] = useState(false);
  const [filterTwo, setFilterTwo] = useState(false);
  const [filterOne, setFilterOne] = useState(false);

  useEffect(() => {
    // get the total reviews and sumReviews
  }, [allReviews])

  useEffect(() => {
    // call filterReviews with filters as parameters
  }, [filterFive, filterFour, filterThree, filterTwo, filterOne])

  const filterReviews = () => {
    // check to if none of the filters are true
      // dont do anything
    // else
      // setAllReviews based on if any of the filters are true is true
  }

  const getAverageRating = () => {
    // algorithm for determining the average rating
      // add up all ratings and divide by the amount of reviews
  }

  const getReviewPercentage = (starNumber) => {
    // algorithm for determining the review percentage
      // take starNumber and count the amount of times its found
      // divide by the total reviews
  }

  return (
    <div>
      <Typography variant="h1">
        {() => getAverageRating()}
      </Typography>
      <Rating value={() => getAverageRating()}/>
      <br/>
      <p>Amount of people who recommend this product</p>
      <div>
        <span>5<LinearProgress variant="determinate" value={() => getReviewPercentage(5)} onClick={() => setFilterFive(filter => !filter)}/></span>
        <span>4<LinearProgress variant="determinate" value={() => getReviewPercentage(4)} onClick={() => setFilterFour(filter => !filter)}/></span>
        <span>3<LinearProgress variant="determinate" value={() => getReviewPercentage(3)} onClick={() => setFilterThree(filter => !filter)}/></span>
        <span>2<LinearProgress variant="determinate" value={() => getReviewPercentage(2)} onClick={() => setFilterTwo(filter => !filter)}/></span>
        <span>1<LinearProgress variant="determinate" value={() => getReviewPercentage(1)} onClick={() => setFilterOne(filter => !filter)}/></span>
      </div>
      <Stack>
        {/* Map this! */}
        <Typography id='size-rating'>Size</Typography>
        <Slider
        disabled={true}
        defaultValue={50}
        size="medium">
        {/* {marks} */}
        </Slider>
        <Typography id='width-rating'>Width</Typography>
        <Slider
        disabled={true}
        defaultValue={50}
        size="medium">
        {/* {marks} */}
        </Slider>
        <Typography id='comfort-rating'>Comfort</Typography>
        <Slider
        disabled={true}
        defaultValue={50}
        size="medium">
        {/* {marks} */}
        </Slider>
        <Typography id='quality-rating'>Quality</Typography>
        <Slider
        disabled={true}
        defaultValue={50}
        size="medium">
        {/* {marks} */}
        </Slider>
        <Typography id='length-rating'>Length</Typography>
        <Slider
        disabled={true}
        defaultValue={50}
        size="medium">
        {/* {marks} */}
        </Slider>
        <Typography id='fit-rating'>Fit</Typography>
        <Slider
        disabled={true}
        defaultValue={50}
        size="medium">
        {/* {marks} */}
        </Slider>
      </Stack>
    </div>
  )
}

export default Ratings;