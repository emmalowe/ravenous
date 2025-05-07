import React from 'react';
import styles from './App.module.css';
import { SearchBar } from './components/SearchBar';
import { BusinessList } from './components/BusinessList';

function App() {
  return (
    <div>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  )
}

export default App
