import { useState, useEffect }  from 'react';
import Overview from './components/overview/Overview';
import Questions from './components/questions/Questions';
import RatingsAndReviews from './components/ratings/RatingsAndReviews';
import Related from './components/related/Related';
import axios from 'axios';

const App = () => {
  const [currentItem, setCurrentItem] = useState<object>({});

  const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/'
  const config = {
    headers: {
      Authorization: import.meta.env.VITE_AUTH_TOKEN
    }
  }

  useEffect(() => {
    axios.get(endpoint + 'products', config)
    .then((results) => {
      setCurrentItem(results.data[0])
      console.log(results.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
// console.log(currentItem)

  if(Object.keys(currentItem).length < 1) {
    return (
      // could use a loading spinner
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <Overview/>
      <Related/>
      <Questions itemId={currentItem.id}/>
      <RatingsAndReviews itemId={currentItem.id}/>
    </div>
  );
};

export default App;