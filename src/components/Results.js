import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRestaurants, selectCity } from '../state/slice';
import SearchResults from './SearchResults';

const Results = () => {
  const restaurants = useSelector(selectRestaurants);
  const city = useSelector(selectCity);
  return (
    <>
      {!city && <Redirect to='/' />}
      <header className='results-header'>
        <div className='wrapper top-bar'>
          <h1>RestoFinder</h1>
          <Link to='/'>Back to Home</Link>
        </div>
      </header>
      <main>
        <SearchResults restaurants={restaurants} city={city} />
      </main>
    </>
  );
};

export default Results;
