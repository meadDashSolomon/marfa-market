// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Box, Button } from "@mui/material";

const MoreReviewsButton = ({ setNumReviews, numReviews}) => {

  const handleClick = () => {
    setNumReviews(num => num + 2);
  };

  return (
    <Box>
      <Button onClick={handleClick}>More Reviews +</Button>
    </Box>
  )
}

export default MoreReviewsButton;
