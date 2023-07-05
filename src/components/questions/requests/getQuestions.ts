
export default function getQuestions (productNum = 37314) {
  return {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
    params: {
        product_id: `${productNum}`,
        page: 1,
        count: Math.pow(10, 10)
    },
    headers: {
      Authorization: import.meta.env.VITE_AUTH_TOKEN
    }
  }
}


