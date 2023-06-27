// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Box, Card, CardContent, Typography, Rating} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { format } from "date-fns";

const Review = ({ review }) => {
  // console.log("what is this: ", review)
  return (
    // Remove border and add border bottom
    <Box sx={{display: "flex"}}>
      <Card variant="outlined">
        <CardContent sx={{
          display: "flex",
          flexDirection: "column"
      }}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "5px"
          }}>
            <Rating value={review.rating} readOnly="true" size="small"></Rating>
            <CheckCircleIcon fontSize="small"/>
            <Typography variant="caption">{review.reviewer_name}</Typography>
            <Typography variant="caption">{format(new Date(review.date), "PPP")}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">{review.summary}</Typography>
            <Typography variant="body2">{review.body}</Typography>
            {!review.response === null ? <Box>
              <Typography>Hello</Typography>
            </Box> : null}
          </Box>
        </CardContent>
      </Card>
      {/* <Box>
        <span id="stars-rating">Will be the stars component</span>
        <span>Verified Purchaser</span>
        <span>Username</span>
        <span>Date or review</span>
      </Box>
      <h3 id="review-summary">
      {review.summary}
      </h3>
      <p id="review-body">
        {review.body}
      </p>
      {review.recommend ? (<Box>Yesrecommends</Box>) :
      (<Box>No recommend</Box>)}
      <Box>
        Response
      </Box>
      <Box>
        {`Helpful? Yes ${review.helpfulness}`}
      </Box> */}
    </Box>
  )
}

export default Review;