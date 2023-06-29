// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Box, Button } from "@mui/material";

const MoreReviewsButton = ({ setNumReviews }) => {

  const handleClick = () => {
    setNumReviews(num => num + 2);
  };

  return (
    <Box>
      <Button onClick={handleClick}
      sx={{
        color: "#525252",
        borderColor: "#e8e4e4"
      }}
      variant="outlined">More Reviews</Button>
    </Box>
  )
}

export default MoreReviewsButton;
