import { Box, Button } from "@mui/material";
import { AddMoreReviewsButtonProps } from "./Interfaces";


const AddMoreReviewsButton = ({ setIsWriting }: AddMoreReviewsButtonProps) => {
  const handleClick = () => {
    setIsWriting(true);
  };
  return (
    <Box>
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{
          color: "#525252",
          borderColor: "#e8e4e4",
        }}
      >
        Add A Review
      </Button>
    </Box>
  );
};

export default AddMoreReviewsButton;
