import React from 'react';
import { useState } from 'react';
import { BusinessList } from './BusinessList';
import styles from './styles/SearchBar.module.css';

export function SearchBar() {

    const [sortBy, setSortBy] = useState("best_match");

    function handleOnChange(event) {
        setSortBy(event.target.value);
    }

    return (
        <div>
            <form action='#'>
                <div>
                    <input className={styles.radioHidden} type="radio" id="option_1" name="choice" value='best_match' onChange={handleOnChange} checked={sortBy === 'best_match'}/>
                    <label className={styles.radioLabel} for="option_1" >Best Match</label>
                    <input className={styles.radioHidden} type="radio" id="option_2" name="choice" value='rating' onChange={handleOnChange} checked={sortBy === 'rating'}/>
                    <label className={styles.radioLabel} for="option_2">Highest Rated</label>
                    <input className={styles.radioHidden} type="radio" id="option_3" name="choice" value='review_count' onChange={handleOnChange} checked={sortBy === 'review_count'}/>
                    <label className={styles.radioLabel} for="option_3">Most Reviewed</label>
                </div>
                <input className={styles.inputText} name='term' type='text' placeholder='Search Businesses' />
                <input className={styles.inputText} name='location' type='text' placeholder='Where?' />
                <button className={styles.buttonSubmit} type='submit'>Let's go</button>
            </form>
        </div>
    )
}