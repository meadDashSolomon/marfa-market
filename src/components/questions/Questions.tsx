import { useState} from "react";
import QuestionList from "./questionComponents/QuestionList";
import SearchBar from "./SearchBar";
import { Box, Stack, Typography } from "@mui/material";
import { Divider } from "@mui/joy";

type QuestionsProps = {
  itemId: number
}

export default function Questions(props: QuestionsProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const[questionSort, setQuestionSort] = useState<string>('helpfulness');





  return (
    <Box className = {'Questions'}>
      <Typography variant="h6" className="Questions Header">QUESTIONS & ANSWERS</Typography>
      <Divider/>
      <Stack>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setQuestionSort={setQuestionSort}
          />
        <QuestionList
          itemId = {props.itemId}
          searchQuery = {searchQuery}
          questionSort = {questionSort}
        />
      </Stack>
    </Box>
  );
}
