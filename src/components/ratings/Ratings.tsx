import { useState, useEffect } from "react";
import {
  LinearProgress,
  Rating,
  Slider,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import Typography from "@mui/joy/Typography";
import { RatingsProps } from "./Interfaces";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Ratings = ({
  setShownReviews,
  shownReviews,
  productRatings,
}: RatingsProps) => {
  const [averageRating, setAverageRating] = useState(0);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [availableRatings] = useState([5, 4, 3, 2, 1]);

  useEffect(() => {
    if (Object.keys(productRatings).length !== 0) {
      const totalReviews = Object.values(productRatings.ratings).reduce(
        (total, current) => {
          return total + Number(current);
        },
        0
      );
      setTotalReviews(totalReviews);
      const combinedRating = Object.entries(productRatings.ratings)
        .map((star: string[]) => {
          return Number(star[0]) * Number(star[1]);
        })
        .reduce((total, current) => {
          return total + current;
        }, 0);
      setAverageRating(Math.round((combinedRating / totalReviews) * 10) / 10);
    }
  }, [productRatings]);

  useEffect(() => {
    // get the total reviews and sumReviews

    const filteredReviews = shownReviews.filter((review) => {
      return selectedRatings.includes(review.rating);
    });
    setShownReviews(filteredReviews);
  }, [selectedRatings]);

  const getReviewPercentage = (starNumber: number) => {
    if (productRatings.ratings[starNumber] !== undefined) {
      return Math.round(
        (Number(productRatings.ratings[starNumber]) / totalReviews) * 100
      );
    } else {
      return 0;
    }
  };

  const getRecommendedPercentage = () => {
    return Math.round(
      (Number(productRatings.recommended.true) /
        (Number(productRatings.recommended.true) +
          Number(productRatings.recommended.false))) *
        100
    );
  };

  const handleRatingClick = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings((ratings) => {
        return ratings.filter((selectedRating) => rating != selectedRating);
      });
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  if (Object.keys(productRatings).length < 1) {
    // replace with spinning wheel thing
    return <Typography>Loading...</Typography>;
  }

  // const arrowIcon = (props) => {
  //   return (
  //     <ArrowDropDownIcon {...props}/>
  //   )
  // };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography level="h1">{averageRating}</Typography>
        <Rating
          value={averageRating}
          readOnly
          size="small"
          precision={0.25}
          sx={{
            color: "#525252",
            paddingTop: "12px",
            paddingLeft: "7px",
          }}
        />
      </Box>
      <Typography
        level="body3"
        textColor="#25252D"
        sx={{
          flex: 1,
          flexShrink: 0,
          width: "100%",
          fontWeight: 550,
          marginBottom: "10px",
        }}
      >
        {getRecommendedPercentage()}% of reviews recommend this product
      </Typography>
      {availableRatings.map((rating, index) => {
        return (
          <Stack direction="column" key={index}>
            <Rating
              readOnly={true}
              value={rating}
              sx={{ fontSize: "16px", color: "#525252", paddingBottom: "7px" }}
            />
            <LinearProgress
              variant="determinate"
              sx={{
                backgroundColor: "#ebebeb",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#525252",
                },
              }}
              color="secondary"
              value={getReviewPercentage(rating)}
              onClick={() => handleRatingClick(rating)}
            />
            <Divider
              sx={{
                my: "20px",
              }}
            />
          </Stack>
        );
      })}
      {/* <Divider sx={{
        marginBottom: "11px",
        marginTop: "18px",
      }}/> */}
      <Stack>
        {Object.entries(productRatings.characteristics).map((item, index) => {
          return (
            <Box key={index}>
              <Typography
                level="body3"
                textColor="#25252D"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {item[0]}
              </Typography>
              <Slider
                disabled={true}
                defaultValue={Number(item[1].value)}
                max={5}
                // components={
                //   { Thumb: arrowIcon }
                // }
                // ThumbComponent={arrowIcon}
                size="small"
              ></Slider>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Ratings;
