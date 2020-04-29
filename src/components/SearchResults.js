import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useDispatch } from 'react-redux';
import { setFilter } from '../state/slice';
import SearchBar from './SearchBar';

const SearchResults = ({ restaurants }) => {
  const dispatch = useDispatch();

  return (
    <div aria-live='polite'>
      <div className='filter-bar'>
        <div className='filter-content wrapper'>
          <SearchBar
            label='Filter'
            name='refine'
            onSubmit={(value) => dispatch(setFilter(value))}
            ctaText='Filter'
            ariaLabel='Refine the list of available restaurants by entering a name, address or area.'
            placeholder='Refine the list of available restaurants.'
          />
          <h2 aria-live='polite'>{`${restaurants.length} Available Restaurants`}</h2>
        </div>
      </div>

      <div className='cards-container wrapper'>
        {restaurants.length > 0 &&
          restaurants.map(
            ({ image_url, reserve_url, price, name, address, id }) => (
              <RestaurantCard
                key={id}
                imgSrc={image_url}
                name={name}
                address={address}
                price={price}
                reserveUrl={reserve_url}
              />
            )
          )}
      </div>
    </div>
  );
};

export default SearchResults;
