// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Box, Card, CardContent, Rating, Stack} from "@mui/material"
import { Typography } from "@mui/joy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from '@mui/icons-material/Check';
import { format } from "date-fns";

const Review = ({ review }) => {
  return (
    <Box>
      <Card variant="outlined" sx={{
        boxShadow: "1px 1px 6px #e8e4e4"
      }}>
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
          maxWidth: "650px"
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
            <Typography level="body3" textColor="#25252D"
            sx={{ marginTop: "10px"}}>Helpful? <a onClick={() => handleHelpfulClick()}>Yes</a> ({review.helpfulness}) | Report</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Review;