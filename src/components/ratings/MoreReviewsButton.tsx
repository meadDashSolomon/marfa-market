import { Box, Button } from "@mui/material";
import { MoreReviewsButton } from "./Interfaces";


const MoreReviewsButton = ({ setNumReviews }: MoreReviewsButton) => {
  const handleClick = () => {
    setNumReviews((num) => num + 2);
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          color: "#525252",
          borderColor: "#e8e4e4",
        }}
        variant="outlined"
      >
        More Reviews
      </Button>
    </Box>
  );
};

export default MoreReviewsButton;
