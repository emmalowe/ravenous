import React from 'react';
import { Business } from './Business';

export function BusinessList() {

    let count=0;
    let numberOfBusinesses = Math.floor(Math.random() * 5) + 1;
    let businessList = [];
    while (count < numberOfBusinesses) {
        businessList.push(<Business />);
        count++;
    }

    return (
        <div>
            {businessList}
        </div>
    )
}