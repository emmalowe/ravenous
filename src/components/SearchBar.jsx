import React from 'react';
import { BusinessList } from './BusinessList';
import styles from './styles/SearchBar.module.css';

export function SearchBar() {
    return (
        <div>
            <form action='#'>
                <div>
                    <input className={styles.radioHidden} type="radio" id="option_1" name="choice" defaultChecked/>
                    <label className={styles.radioLabel} for="option_1" value='best_match'>Best Match</label>
                    <input className={styles.radioHidden} type="radio" id="option_2" name="choice"/>
                    <label className={styles.radioLabel} for="option_2" value='rating'>Highest Rated</label>
                    <input className={styles.radioHidden} type="radio" id="option_3" name="choice"/>
                    <label className={styles.radioLabel} for="option_3" value='review_count'>Most Reviewed</label>
                </div>
                <input className={styles.inputText} name='term' type='text' placeholder='Search Businesses' />
                <input className={styles.inputText} name='location' type='text' placeholder='Where?' />
                <button className={styles.buttonSubmit} type='submit'>Let's go</button>
            </form>
        </div>
    )
}