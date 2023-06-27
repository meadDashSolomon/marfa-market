import { Box } from "@mui/material";
import { useState } from "react";
type SearchBarProps = {
  questions: object;
}

export default function SearchBar(props:SearchBarProps) {
  // console.log(props);
  // if (){

  // }
    return (
        <Box className = {'QuestionsAndAnswers.SearchBar'}>
      {/* inputbox and search button */}
        <input 
        className="Searchbar.input"
        type='text'
        placeholder="Have a question? Search for answers…"
        
        />
        <button type="submit" >Submit</button>
      </Box>
    )
}