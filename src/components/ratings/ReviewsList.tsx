// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from "react";
import { Box } from '@mui/material'
import Review from "./Review";

const ReviewsList = ({ reviews }) => {
  // Display 2 reviews initially
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      {reviews.map((review, index) => <Review key={index} review={review}/>
      )}
    </Box>
  )
}

export default ReviewsList;