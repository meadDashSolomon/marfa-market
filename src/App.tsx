import Overview from './components/overview/Overview';
import Questions from './components/questions/Questions';
import RatingsAndReviews from './components/ratings/RatingsAndReviews';
import Related from './components/related/Related';

const App = () => {
  return (
    <div>
      <Overview/>
      <Related/>
      <Questions/>
      <RatingsAndReviews/>
    </div>
  );
};

export default App;