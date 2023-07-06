import { Box, Button, TextField } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

type SearchBarProps = {
  setQuestionSort: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  console.log("CHANGE SETQUESTIONSORT TYPE FROM ANY WHEN DEFINED");

  const searchFunc = (query: string) => {
    if (query.length >= 3) {
      props.setQuestionSort(query);
    }
  }
  return (
    <Box className={'Questions SearchBar'}>
      <TextField
        className="Question Searchbar Bar"
        type={"search"}
        id="QuestionSearchBar"
        defaultValue={props.searchQuery}
        placeholder="Have a question? Search for answers…"
        onChange={(e) => {
          console.log('SEARCH ONCHANGE RAN ', e.target.value)
          searchFunc(e.target.value);
        }}
      />
      <Button variant="outlined" endIcon={<SearchRoundedIcon />}></Button>
    </Box>
  )
}