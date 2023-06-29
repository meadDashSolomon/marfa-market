// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";

const RequestHandler = (method, path = '', params = {}) => {
  return axios.request({
    'method': method,
    'url': `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${path}`,
    'params': params,
    'headers': {
      "Authorization": import.meta.env.VITE_API_KEY
    }
  })
}

export default RequestHandler;