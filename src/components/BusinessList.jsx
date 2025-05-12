import React from 'react';
import styles from './styles/BusinessList.module.css';
import { Business } from './Business';

export function BusinessList( {businesses} ) {
    if (businesses.length === 0) {
        return (
            <div className={styles.noResults}>
                <h2>No results</h2>
            </div>
        )
    } 

    let businessList = [];
    businesses.forEach(business => {
        businessList.push(
            <Business key={business.id} business={business}/>
        )
    });
    return (
        <div>
            {businessList}
        </div>
    )
}