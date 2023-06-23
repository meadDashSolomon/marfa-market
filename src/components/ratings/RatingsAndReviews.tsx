// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from 'axios'
import Ratings from './Ratings'
import Reviews from './Reviews'
import { useState } from 'react';

export default function RatingsAndReviews() {
  const [allReviews, setAllReviews] = useState([]);
  return (
    <div>
      <Ratings allReviews={allReviews} setAllReviews={setAllReviews}/>
      <Reviews allReviews={allReviews}/>
    </div>
  );
}