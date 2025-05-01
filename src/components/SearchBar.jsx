import React from 'react';

let sortMethod = 'best_match';

function handleSortTypeSelect(event) {
    const elements = event.target.parentNode.querySelectorAll('p');
    elements.forEach((element) => {
        if (element.innerHTML[0] === '*') {
            element.innerHTML = element.innerHTML.slice(2);
        }
    })
    event.target.innerHTML = '* ' + event.target.innerHTML;
    sortMethod = event.target.id;
}

function SortSelection() {
    return (
        <div className='sort-type'>
            <p id='best_match' onClick={handleSortTypeSelect}>* Best Match</p>
            <p id='rating' onClick={handleSortTypeSelect}>Highest Rated</p>
            <p id='review_count' onClick={handleSortTypeSelect}>Most Reviewed</p>
        </div>
    )
}

function handleSubmit(event) {
    // Ping the Yelp API
}

export function SearchBar() {
    return (
        <div className='search-bar'>
            <SortSelection />
            <form action='#' onSubmit={handleSubmit}>
                <input name='term' type='text' placeholder='Search Businesses' />
                <input name='location' type='text' placeholder='Where?' />
                <button type='submit'>Let's go</button>
            </form>
        </div>
    )
}

export function SearchResults() {
    return (
        <div className='search-results'>
            <h2>Results</h2>
            {/* Placeholder */}
        </div>
    )
}