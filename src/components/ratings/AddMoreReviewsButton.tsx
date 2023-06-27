// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Box, Button } from "@mui/material";

const AddMoreReviewsButton = ({ setIsWriting }) => {

  const handleClick = () => {
    setIsWriting(true);
  }
  return (
    <Box>
      <Button onClick={handleClick}>Add A Review</Button>
    </Box>
  )
}

export default AddMoreReviewsButton;
