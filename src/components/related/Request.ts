import axios from "axios";
const Request = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  get: () => {
    return  axios.get(Request.url + 'products', {
        headers: {
          "Authorization": import.meta.env.VITE_AUTH_TOKEN
        },
        params: {
          "sort": "newest",
          "product_id": 1
        }
    });
  },
  getStyles: (id : number) => {
    return axios.get(Request.url + `products/${id}/styles`, {
      headers: {
        "Authorization" : import.meta.env.VITE_AUTH_TOKEN
      },
      params: {
        "product_id": id
      }
    })
  },
  getRatings: (id: number) => {
    return axios.get(Request.url + 'reviews/meta', {
      headers: {
        "Authorization" : import.meta.env.VITE_AUTH_TOKEN
      },
      params: {
        "product_id": id
      }
    })
  }
};

export default Request;