type SearchBarProps = {
  questions: object
}

export default function SearchBar(props:SearchBarProps) {
  console.log(props);
    return (
        <div>
      {/* inputbox and search button */}
        <input type='text' placeholder="Have a question? Search for answers…"/>
        <button type="submit" >Submit</button>
      </div>
    )
}