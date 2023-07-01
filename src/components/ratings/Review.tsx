// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Box, Card, CardContent, Rating, Stack, Link } from "@mui/material"
import { Typography } from "@mui/joy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from '@mui/icons-material/Check';
import { format } from "date-fns";
import RequestHandler from "./RequestHandler";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ReviewPhotos from "./ReviewPhotos";

const Review = ({ review }) => {

  console.log(review)

  const handleHelpfulClick = (event) => {
    console.log('hello')
    event.preventDefault();
    RequestHandler("PUT", `/reviews/${review.review_id}/helpful`)
  }

  const handleReportClick = (event) => {
    console.log('hello')
    event.preventDefault();
    RequestHandler("PUT", `/reviews/${review.review_id}/report`)
  }

  return (
    <Box>
      <Card variant="outlined" sx={{
        boxShadow: "1px 1px 6px #e8e4e4"
      }}>
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
          maxWidth: "700px"
      }}>
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center">
              <Rating
              value={review.rating}
              readOnly={true} size="small"
              precision={.25}
              sx={{
                color: "#525252"}}></Rating>
              <Stack
              direction="row"
              alignItems="center">
                <CheckCircleIcon
                fontSize="16px"
                sx={{
                  color: "#525252",
                  marginRight: "4px"
                }}/>
                <Typography level="body3"
                textColor="#25252D"
                sx={{
                  marginRight: "3px",
                  fontWeight: 425
                }}> {review.reviewer_name}, </Typography>
                <Typography level="body3" textColor="#25252D"
                sx={{
                  fontWeight: 425
                }}> {format(new Date(review.date), "PPP")}</Typography>
              </Stack>
            </Stack>
          <Box>
            <Typography
            level="h6"
            sx={{
                my: "10px"
              }}>{review.summary}</Typography>
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
            <ReviewPhotos photos={review.photos}/>
            <Typography level="body3" textColor="#25252D"
            sx={{ marginTop: "10px"}}>
              Helpful? <Link onClick={handleHelpfulClick} color="inherit" href="#" underline="always" variant="body3">Yes</Link> ({review.helpfulness}) | <Link onClick={handleReportClick} color="inherit" href="#" underline="always" variant="body3">Report</Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Review;