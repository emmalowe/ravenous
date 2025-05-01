import React from 'react';

export const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

export function Business() {
  return (
    <div className='business'>
      <img className='business-image' src={business.imageSrc}/>
      <p className='business-name'>{business.name}</p>
      <p className='business-address'>{business.address}</p>
      <p className='business-city'>{business.city}</p>
      <p className='business-state'>{business.state}</p>
      <p className='business-zipcode'>{business.zipCode}</p>
      <p className='business-category'>{business.category}</p>
      <p className='business-rating'>{business.rating}</p>
      <p className='business-review-count'>{business.reviewCount}</p>
    </div>
  )
};

