export default function putAnswerHelpful (answer_id:number) {
  return {
    method:'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answer_id}/helpful`,
    article: {

    },
    headers: {
            Authorization: import.meta.env.VITE_AUTH_TOKEN
    }
  }
}