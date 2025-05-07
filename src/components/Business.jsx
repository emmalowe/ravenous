import React from 'react';
import styles from './styles/Business.module.css';

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
    <div className={styles.business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc}/>
      </div>
      <h2>{business.name}</h2>
      <div className={styles.information}>
        <div className={styles.address}> 
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.state} {business.zipCode}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.category}>{business.category}</p>
          <p className={styles.rating}>{business.rating} stars</p>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
      
    </div>
  )
};

