// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios"
import Ratings from "./Ratings"
import Reviews from "./Reviews"
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Divider, Typography } from "@mui/joy";
import RequestHandler from "./RequestHandler";

export default function RatingsAndReviews({ itemId }) {
    const reviewParams = {
      "page": 1,
      "count": 10,
      "sort": "relevant",
      "product_id": itemId
    }
    const metaParams = {
        "product_id": itemId
    }

    const fetchReviews = (reviewParams) => {
      RequestHandler("GET", '/reviews', reviewParams)
      .then((response) => {
        setAllReviews(response.data.results);
        setShownReviews(response.data.results);
      })
      .catch((err) => console.log("There was an error: ", err))
    }

    useEffect(() => {
      if(itemId) {
        fetchReviews(reviewParams)
      }
    }, []);


    useEffect(() => {
      if(itemId) {
        RequestHandler("GET", '/reviews/meta', metaParams)
        .then((response) => setProductRatings(response.data))
        .catch((err) => console.log(err));
      }
    }, []);

    const [allReviews, setAllReviews] = useState([]);
    const [shownReviews, setShownReviews] = useState([]);
    const [productRatings, setProductRatings] = useState({});
    const [productId, setProductId] = useState(37423);

    useState(() => {
      setShownReviews(allReviews)
    }, [])

    if (allReviews.length < 1 && shownReviews.length < 1 && !itemId) {
      return (
        <div>Loading</div> // replace with loading symbol
        )
      }

      return (
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "auto",
          mx: "80px"}}>
      <Typography level="h3"sx={{
        display: "flex",
        marginBottom: "7px"
      }}>
        Ratings & Reviews
      </Typography>
      <Divider inset="none" sx={{
          marginBottom: "5px",
          maxWidth: "974px",
          minWidth: "650px"
          }}/>
          <Stack
          direction="row"
          justifyContent="start"
          alignItems="start"
          spacing="50px">
            <Ratings allReviews={allReviews} setShownReviews={setShownReviews} productRatings={productRatings}/>
            <Reviews allReviews={shownReviews} fetchReviews={fetchReviews} reviewParams={reviewParams} productRatings={productRatings}/>
          </Stack>
      </Box>
  );
}