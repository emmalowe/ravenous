import React from 'react';
import { Business } from './Business';

export function BusinessList( {businesses} ) {
    if (businesses.length === 0) {
        return (
            <div>
                <h2>No results found</h2>
            </div>
        )
    } 

    let businessList = [];
    businesses.forEach(business => {
        businessList.push(
            <Business business={business}/>
        )
    });
    return (
        <div>
            {businessList}
        </div>
    )
}