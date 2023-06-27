// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Box, Card, CardContent, Rating, Stack} from "@mui/material"
import { Typography } from "@mui/joy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from '@mui/icons-material/Check';
import { format } from "date-fns";

const Review = ({ review }) => {
  return (
    // Remove border and add border bottom
    <Box>
      <Card variant="outlined">
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "650px"
      }}>
          {/* <Box sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: "5px"
          }}> */}
            <Stack
            direction="row"
            alignItems="flex-start">
            <Rating value={review.rating} readOnly={true} size="small" precision={.25} sx={{
              color: "#525252",
              margin: "auto"}}></Rating>
            <CheckCircleIcon fontSize="small"/>
            <Typography level="body3"> {review.reviewer_name}, </Typography>
            <Typography level="body3"> {format(new Date(review.date), "PPP")}</Typography>
            </Stack>
          {/* </Box> */}
          <Box>
            <Typography level="h6" sx={{ marginBottom: "10px"}}>{review.summary}</Typography>
            <Typography level="body2" textColor="#545454" sx={{ marginBottom: "10px"}}>{review.body}</Typography>
            {review.recommend ?
            <Stack direction="row" spacing="8px">
              <CheckIcon fontSize="small"/>
              <Typography
              level="body2"
              textColor="#25252D"
              >I recommend this product</Typography>
            </Stack> : null}
            {!review.response === null ?
            <Box>
              <Typography sx={{
                backgroundColor: "text.secondary"
              }}>Hello</Typography>
            </Box> : null}
            <Typography level="body3" textColor="#25252D"
            sx={{ marginTop: "10px"}}>Helpful? Yes ({review.helpfulness}) | Report</Typography>
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