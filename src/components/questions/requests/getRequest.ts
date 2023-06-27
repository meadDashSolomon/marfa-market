
export default function getRequest (productNum = '37314', page = 1, count = 5) {
  return {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
    params: {
      product_id: `${productNum}`,
      page: page,
        count: count
    },
    headers: {
      Authorization: import.meta.env.VITE_API_KEY
      // import.meta.env.VITE_API_KEY
    }
  }
}

