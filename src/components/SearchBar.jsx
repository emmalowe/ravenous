import React from 'react';
import { useState } from 'react';
import { BusinessList } from './BusinessList';
import styles from './styles/SearchBar.module.css';

export function SearchBar() {

    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    function handleOnChangeRadio(event) {
        setSortBy(event.target.value);
    }

    function handleOnChangeTerm(event) {
        setTerm(event.target.value);
    }

    function handleOnChangeLocation(event) {
        setLocation(event.target.value);
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        alert(`Searching for ${term} in ${location} sorted by ${sortBy}`);
        // Here you would typically make an API call to fetch the businesses
        // For now, we will just log the values to the console
    }

    return (
        <div className={styles.searchBar}>
            <form action='#' onSubmit={handleOnSubmit}>
                <div>
                    <input className={styles.radioHidden} type="radio" id="option_1" name="choice" value='best_match' onChange={handleOnChangeRadio} checked={sortBy === 'best_match'}/>
                    <label className={styles.radioLabel} for="option_1" >Best Match</label>
                    <input className={styles.radioHidden} type="radio" id="option_2" name="choice" value='rating' onChange={handleOnChangeRadio} checked={sortBy === 'rating'}/>
                    <label className={styles.radioLabel} for="option_2">Highest Rated</label>
                    <input className={styles.radioHidden} type="radio" id="option_3" name="choice" value='review_count' onChange={handleOnChangeRadio} checked={sortBy === 'review_count'}/>
                    <label className={styles.radioLabel} for="option_3">Most Reviewed</label>
                </div>
                <input className={styles.inputText} name='term' type='text' placeholder='Search Businesses' onChange={handleOnChangeTerm}/>
                <input className={styles.inputText} name='location' type='text' placeholder='Where?' onChange={handleOnChangeLocation}/>
                <button className={styles.buttonSubmit} type='submit'>Let's go</button>
            </form>
        </div>
    )
}