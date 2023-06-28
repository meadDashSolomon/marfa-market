import { useState, useEffect }  from 'react';
import Overview from './components/overview/Overview';
import Questions from './components/questions/Questions';
import RatingsAndReviews from './components/ratings/RatingsAndReviews';
import Related from './components/related/Related';
import axios from 'axios';

const App = () => {
  const [currentItem, setCurrentItem] = useState({});
  const [allItems, setAllItems] = useState([]);

  const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/'
  const config = {
    headers: {
      Authorization: import.meta.env.VITE_AUTH_TOKEN
    }
  }

  useEffect(() => {
    axios.get(endpoint + 'products', config)
    .then((results) => {
      setCurrentItem(results.data[0]);
      setAllItems(results.data);
      console.log("RESUlTS::::", results)
    }
    )
    .catch((err) => console.log("APP GET ERROR:::::", err))
  }, [])

  return (
    <div>
      <Overview itemArray={allItems} description={currentItem.description} slogan={currentItem.slogan} id={currentItem.id} setCurrentItem={setCurrentItem}/>
      <Related/>
      <Questions itemId={currentItem.id}/>
      <RatingsAndReviews/>
    </div>
  );
};

export default App;