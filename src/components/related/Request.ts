import axios from "axios";
import SECRETS from "../../config";
const Request = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  get: () => {
    return new Promise( (resolve, reject) => {
      axios.get(Request.url + 'products', {
        headers: {
          "Authorization": SECRETS.AUTH_TOKEN
        },
        params: {
          "sort": "newest",
          "product_id": 1
        }
      }).then((res) => {
        const data: Object[] = res.data;
        const output = [];
        for (let i = 0; i < data.length; i++) {
          output.push(Request.getStyles(data[i].id));
        }
        Promise.all(output).then((result) => {
          console.log("RESULT", result);
          console.log("OUTPUT", data);
          for (let i = 0; i < result.length; i++) {
            data[i] = {...data[i], ...result[i].data};
          }
          resolve(data);
        }).catch((err) => {reject(err)});
      }).catch((err) => {reject(err)});
    });
  },
  getStyles: (id : number) => {
    return axios.get(Request.url + `products/${id}/styles`, {
      headers: {
        "Authorization" : SECRETS.AUTH_TOKEN
      },
      params: {
        "product_id": id
      }
    })
  }
};

export default Request;