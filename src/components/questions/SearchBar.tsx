import { Box, IconButton, TextField } from "@mui/material";

type SearchBarProps = {
  setQuestionSort: any;
  searchQuery: string;
  setSearchQuery: any;
}

export default function SearchBar(props:SearchBarProps) {
  console.log("CHANGE SETQUESTIONSORT TYPE FROM ANY WHEN DEFINED");
  
  const searchFunc = (query:string) => {
    if (query.length >= 3){
      props.setQuestionSort(query);
    }
  }
    return (
        <Box className = {'Questions SearchBar'}>
        <TextField
          className="Question Searchbar Bar"
          type={"search"}
          id="QuestionSearchBar"
          defaultValue={props.searchQuery}
          placeholder="Have a question? Search for answers…"
          onChange={(e) => {
            console.log('SEARCH ONCHANGE RAN ',e.target.value)
            searchFunc(e.target.value);
          }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search"></IconButton>
      </Box>
    )
}