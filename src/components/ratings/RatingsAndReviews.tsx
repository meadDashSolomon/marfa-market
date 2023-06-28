// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios"
import Ratings from "./Ratings"
import Reviews from "./Reviews"
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Divider, Typography } from "@mui/joy";

export default function RatingsAndReviews() {
  const endpoint = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe"

  const headers = {
    "Authorization": import.meta.env.VITE_API_KEY
    }

    const reviewParams = {
      params: {
        "page": 1,
        "count": 10,
        "sort": "relevant",
        "product_id": 37404
      },
      headers
    }


    const fetchReviews = (reviewParams) => {
      axios.get(endpoint + "/reviews", reviewParams)
      .then((response) => {
        setAllReviews(response["data"]["results"]);
        setShownReviews(response["data"]["results"]);
      })
      .catch((err) => console.log("There was an error: ", err))
    };

    const metaParams = {
      params: {
        "product_id": 37404
      },
      headers
    }

    const fetchMetaData = (params) => {
      axios.get(endpoint + "/reviews/meta", params)
      .then((response) => setProductRatings(response['data']))
      .catch((err) => console.log(err));
    }

    useEffect(() => {
      fetchReviews(reviewParams);
    }, []);

    useEffect(() => {
      fetchMetaData(metaParams);
    }, []);

    const [allReviews, setAllReviews] = useState([]);
    const [shownReviews, setShownReviews] = useState([]);
    const [productRatings, setProductRatings] = useState({});
    const [productId, setProductId] = useState(37404);

    useState(() => {
      console.log('hello')
      setShownReviews(allReviews)
    }, [])

    if (allReviews.length < 1 && shownReviews.length < 1) {
      console.log('hello')
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
            <Reviews allReviews={shownReviews} fetchReviews={fetchReviews} reviewParams={reviewParams} productId={productId}/>
          </Stack>
      </Box>
  );
}