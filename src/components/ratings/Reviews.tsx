// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList';
import AddMoreReviewsButton from './AddMoreReviewsButton';
import MoreReviewsButton from './MoreReviewsButton';
import NewReview from './AddReview/NewReview';
import { Box, FormControl, MenuItem, Select } from '@mui/material'
import { Typography } from '@mui/joy';
import RequestHandler from './RequestHandler';

const Reviews = ({allReviews, reviewParams, productRatings, fetchReviews, itemId}) => {
  const [numReviews, setNumReviews] = useState(2);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const [sort, setSort] = useState('relevant');

  const handleSortChange = (e) => {
    setSort(e.target.value);
  }

  useEffect(() => {
    reviewParams.sort = sort;
    fetchReviews(reviewParams)
  }, [sort])

  useEffect(() => {
    if(!allReviews.length < 1) {
      const additionalReviews = [];
      for(let i = 0; i < numReviews; i++) {
        if (allReviews[i] !== undefined) {
          additionalReviews.push(allReviews[i]);
        }
      }
      setDisplayedReviews(additionalReviews)
    }
  }, [allReviews, numReviews])

  return (
    <Box sx={{
      flexBasis: '685px',
      flexShrink: 1,
      flexGrow: 0
    }}>
      <Typography level='body1' sx={{ display: 'inline' }}>{allReviews.length} reviews, sorted by </Typography>
      <FormControl sx={{ minWidth: 100 }} size='small'>
        <Select
        variant='standard'
        onChange={handleSortChange}
        value={sort}
        label=''>
          <MenuItem value={'relevant'}>relevance</MenuItem>
          <MenuItem value={'newest'}>newest</MenuItem>
          <MenuItem value={'helpfulness'}>helpfulness</MenuItem>
        </Select>
      </FormControl>
      <Box>
        {isWriting ? <NewReview reviewParams={reviewParams} fetchReviews={fetchReviews} itemId={itemId} isWriting={isWriting} setIsWriting={setIsWriting} productRatings={productRatings}/> : null}
      </Box>
      <Box>
        <ReviewsList reviews={displayedReviews}/>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: '10px',
        marginTop: '10px'
      }}>
        <AddMoreReviewsButton setIsWriting={setIsWriting}/>
        {displayedReviews.length !== allReviews.length ? <MoreReviewsButton setNumReviews={setNumReviews}/> : null}
      </Box>
    </Box>
  )
}

export default Reviews;
