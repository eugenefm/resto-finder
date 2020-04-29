import React from 'react';
import { Link } from 'react-router-dom';
import SearchResults from '../components/SearchResults';
import { useSelector } from 'react-redux';
import { selectRestaurants } from '../state/slice';

const Results = () => {
  const restaurants = useSelector(selectRestaurants);
  return (
    <>
      <header className='results-header'>
        <div className='wrapper top-bar'>
          <h1>RestoFinder</h1>
          <Link to='/'>Back to Home</Link>
        </div>
      </header>
      <main>
        <SearchResults restaurants={restaurants} />
      </main>
    </>
  );
};

export default Results;
