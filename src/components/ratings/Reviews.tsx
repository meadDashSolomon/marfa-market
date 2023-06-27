// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState, useEffect } from "react";
import ReviewsList from "./ReviewsList";
import AddMoreReviewsButton from "./AddMoreReviewsButton";
import MoreReviewsButton from "./MoreReviewsButton";
import NewReview from "./NewReview";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material"

const Reviews = ({allReviews, fetchReviews, params}) => {
  const [numReviews, setNumReviews] = useState(2);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const [sort, setSort] = useState('relevant');

  const handleSortChange = (e) => {
    setSort(e.target.value);
  }

  useEffect(() => {
    params['sort'] = sort;
    fetchReviews(params)
  }, [sort])

  useEffect(() => {
    if(!allReviews.length < 1) {
      const additionalReviews = [];
      for(let i = 0; i < numReviews; i++) {
        additionalReviews.push(allReviews[i]);
      }
      setDisplayedReviews(additionalReviews)
    }
  }, [allReviews, numReviews])

  return (
    // {isWriting ? display modal}
    <Box>
      <Typography sx={{ display: "inline"}}>{allReviews.length} reviews, sorted by </Typography>
      <FormControl sx={{minWidth: 100}} size="small">
        <Select
        variant="standard"
        onChange={handleSortChange}
        autoWidth={true}
        value={sort}
        label="">
          <MenuItem value={'relevant'}>relevance</MenuItem>
          <MenuItem value={'newest'}>newest</MenuItem>
          <MenuItem value={'helpfulness'}>helpfulness</MenuItem>
        </Select>
      </FormControl>
      <Box>
        {isWriting ? <NewReview/> : null}
      </Box>
      <Box>
        <ReviewsList reviews={displayedReviews}/>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: '10px'
      }}>
        <AddMoreReviewsButton setIsWriting={setIsWriting}/>
        <MoreReviewsButton setNumReviews={setNumReviews} numReviews={numReviews}/>
      </Box>
    </Box>
  )
}

export default Reviews;
