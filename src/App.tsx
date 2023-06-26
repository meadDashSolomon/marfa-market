import { useState, useEffect }  from 'react';
import Overview from './components/overview/Overview';
import Questions from './components/questions/Questions';
import RatingsAndReviews from './components/ratings/RatingsAndReviews';
import Related from './components/related/Related';
import axios from 'axios';

const App = () => {
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    // axios.get()
    console.log(typeof import.meta.env.VITE_AUTH_TOKEN);
  }, [])

  return (
    <div>
      <Overview  />
      <Related/>
      <Questions/>
      <RatingsAndReviews/>
    </div>
  );
};

export default App;