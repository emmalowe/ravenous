import React from 'react';
import styles from './styles/Business.module.css';

export const exampleBusiness = {
  image_url: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  location: {
    display_address: ['1010 Paddington Way', 'Flavortown', 'NY 10101']
  },
  categories: [{'alias': 'Italian', 'title': 'Italian'}],
  rating: 4.5,
  review_count: 90
};

export function Business( {business} ) {
  return (
    <div className={styles.business}>
      <div className={styles.imageContainer}>
        <img src={business.image_url}/>
      </div>
      <h2>{business.name}</h2>
      <div className={styles.information}>
        <div className={styles.address}> 
          <p>{business.location.display_address[0]}</p>
          <p>{business.location.display_address[1]}</p>
          <p>{business.location.display_address[2]}</p>
          <p>{business.location.display_address[3]}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.category}>{business.categories[0].title}</p>
          <p className={styles.rating}>{business.rating} stars</p>
          <p>{business.review_count} reviews</p>
        </div>
      </div>
      
    </div>
  )
};

