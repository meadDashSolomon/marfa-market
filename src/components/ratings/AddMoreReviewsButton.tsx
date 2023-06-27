// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Box, Button } from "@mui/material";

const AddMoreReviewsButton = ({ setIsWriting }) => {

  const handleClick = () => {
    setIsWriting(true);
  }
  return (
    <Box>
      <Button onClick={handleClick}
      variant="outlined"
      sx={{
        color: "#525252",
        borderColor: "#e8e4e4"
      }}>Add A Review</Button>
    </Box>
  )
}

export default AddMoreReviewsButton;
