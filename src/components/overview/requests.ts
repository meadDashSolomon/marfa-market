import axios from "axios";

const request = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  get: () => {
    return axios.get(request.url)
  }
}