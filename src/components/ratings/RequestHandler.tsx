// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";

const RequestHandler = (method, path = '', params = {}, data = {}) => {
  const request = {
    'method': method,
    'url': `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${path}`,
    'params': params,
    'data': data,
    'headers': {
      "Authorization": import.meta.env.VITE_AUTH_TOKEN
    }
  }

  // if (method === "POST") {
  //   console.log('im herees')
  //   request.headers['Content-Type'] = 'application/json';
  // }

  console.log(request)
  return axios.request(request)
}

export default RequestHandler;