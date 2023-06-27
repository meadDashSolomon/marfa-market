// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from 'axios'
import Ratings from './Ratings'
import Reviews from './Reviews'
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export default function RatingsAndReviews() {
  const endpoint = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe"
  const config = {


  }

  const params = {
      'page': 1,
      'count': 10,
      'sort': "relevant",
      'product_id': 37312
    }

  const headers = {
    'Authorization': import.meta.env.VITE_API_KEY
    }

  const [allReviews, setAllReviews] = useState([]);

  const fetchReviews = (params) => {
    axios.get(endpoint + '/reviews', { params, headers })
    .then((response) => setAllReviews(response['data']['results']))
    .catch((err) => console.log('There was an error: ', err))
  };

  useEffect(() => {
    fetchReviews(params);
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'}}>
      <Typography variant='h6'sx={{
        display: 'flex',
      }}>
        Ratings & Reviews
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '50px'}}>
        <Ratings allReviews={allReviews} setAllReviews={setAllReviews}/>
        <Reviews allReviews={allReviews} fetchReviews={fetchReviews} params={params}/>
      </Box>
    </Box>
  );
}