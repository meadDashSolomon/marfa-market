// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import { Button } from '@mui/material';

import QuestionList from "./QuestionList"
import SearchBar from "./SearchBar"


export default function Questions() {
  return (
    <div>
      <h3>QUESTIONS & ANSWERS</h3>
      <SearchBar/>
      <QuestionList/>

    </div>
  );
}
