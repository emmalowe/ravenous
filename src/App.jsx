import React from 'react';
import { useState } from 'react';
import styles from './App.module.css';
import { SearchBar } from './components/SearchBar';
import { BusinessList } from './components/BusinessList';
import { exampleBusiness } from './components/Business';

function App() {
  
  let numberOfBusinesses = Math.floor(Math.random() * 6);
  let exampleBusinesses = Array(numberOfBusinesses).fill(exampleBusiness);

  const [businesses, setBusinesses] = useState(exampleBusinesses);

  return (
    <div>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  )
}

export default App
