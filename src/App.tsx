// @ts-ignore
import React from 'react';
import Overview from './components/overview/Overview';
import Questions from './components/questions/Questions';
import Ratings from './components/ratings/RatingsAndReviews';
import Related from './components/related/Related';

const App = () => {
  return (
    <div>
      <Overview/>
      <Related/>
      <Questions/>
      <Ratings/>
    </div>
  );
};

export default App;