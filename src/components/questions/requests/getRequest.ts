
export default function getRequest (productNum = 37314, page = 1, count = 5) {
  return {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
    params: {
      product_id: `${productNum}`,
      page: page,
        count: count
    },
    headers: {
      Authorization: import.meta.env.VITE_AUTH_TOKEN
    }
  }
}

/* Example:
{
    "product_id": "37314",
    "results": [
        {
            "question_id": 644364,
            "question_body": "what does cozy mean",
            "question_date": "2022-12-08T00:00:00.000Z",
            "asker_name": "pixter",
            "question_helpfulness": 6,
            "reported": false,
            "answers": {
                "5989885": {
                    "id": 5989885,
                    "body": "why so serious?",
                    "date": "2022-12-16T00:00:00.000Z",
                    "answerer_name": "joker",
                    "helpfulness": 5,
                    "photos": []
                },
                "5989953": {
                    "id": 5989953,
                    "body": "ANswer",
                    "date": "2022-12-17T00:00:00.000Z",
                    "answerer_name": "test ",
                    "helpfulness": 2,
                    "photos": [
                        "http://res.cloudinary.com/dq6rqplja/image/upload/v1671286790/ly9dfe12mty8fpq6mlr0.png"
                    ]
                },
                "5990613": {
                    "id": 5990613,
                    "body": "I don't like the other answers here so I'm going to report them",
                    "date": "2023-02-09T00:00:00.000Z",
                    "answerer_name": "abouttoblock",
                    "helpfulness": 0,
                    "photos": []
                },
                "5990669": {
                    "id": 5990669,
                    "body": "This is an answer from me",
                    "date": "2023-02-09T00:00:00.000Z",
                    "answerer_name": "miggy",
                    "helpfulness": 0,
                    "photos": [
                        "https://media.istockphoto.com/id/1277773173/vector/texas-states-of-usa-outline-map-vector-template-illustration-design-editable-stroke.jpg?s=612x612&w=0&k=20&c=m2l4vnT6hSglIMEQmlYoKV1ego2bhFFp3NuFLRvxF3I="
                    ]
                },
                "5991453": {
                    "id": 5991453,
                    "body": "dsfdsf",
                    "date": "2023-03-31T00:00:00.000Z",
                    "answerer_name": "asdfadsf",
                    "helpfulness": 3,
                    "photos": [
                        "blob:http://localhost:3000/abf5f808-f4fc-45b6-b941-c369ffb1ca6e"
                    ]
                },
                "5991455": {
                    "id": 5991455,
                    "body": "test",
                    "date": "2023-03-31T00:00:00.000Z",
                    "answerer_name": "test",
                    "helpfulness": 0,
                    "photos": [
                        "blob:http://localhost:3000/fd6ab951-7c50-4f84-8036-1884a39696c1"
                    ]
                }
            }
        }
    ]
}
*/