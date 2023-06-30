import axios from "axios";

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/'

const fetchReviewMetaData = () => {
  return axios
    .get(url + 'reviews/meta', {
      headers: {
        Authorization: import.meta.env.VITE_AUTH_TOKEN,
        params: {
          "product_id": id
        }
      }
    })
}

export default fetchReviewMetaData;