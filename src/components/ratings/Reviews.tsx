// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";
import { useState } from "react";
import ReviewsList from "./ReviewsList";
import AddMoreReviewsButton from "./AddMoreReviewsButton";
import MoreReviewsButton from "./MoreReviewsButton";
import NewReview from "./NewReview";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const Reviews = ({allReviews}) => {
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const [sort, setSort] = useState('Relevance');

  const handleSortChange = (e) => {
    // console.log(e.target.value);
    setSort(e.target.value);
  }

  return (
    // {isWriting ? display modal}
    <div>
      <FormControl sx={{minWidth: 100}} size="small">
        <InputLabel>{sort}</InputLabel>
        <Select
        variant="standard"
        onChange={handleSortChange}
        autoWidth={true}
        value={sort}
        label="">
          <MenuItem value={'Relevance'}>Relevance</MenuItem>
          <MenuItem value={'Newest'}>Newest</MenuItem>
          <MenuItem value={'Helpful'}>Helpful</MenuItem>
        </Select>
      </FormControl>
      <div>
        {isWriting ? <NewReview/> : null}
      </div>
      <div>
        <ReviewsList displayedReviews={displayedReviews}/>
      </div>
      <div>
        <AddMoreReviewsButton setIsWriting={setIsWriting}/>
        <MoreReviewsButton displayMore={setDisplayedReviews} allReviews={allReviews}/>
      </div>
    </div>
  )
}

  // HTML: Select
      // {/* {allReviews.length} reviews, sorted by
      // <select className="sort" name="rating" id="rating-sort">
      //   <option>Relevance</option>
      //   <option>Newest</option>
      //   <option>Helpful</option>
      // </select> */}

export default Reviews;
