import { SearchBar, SearchResults } from './components/SearchBar';
import React from 'react';

function App() {
  return (
    <div>
      <h1>ravenous</h1>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="search-results">
        <SearchResults />
      </div>
    </div>
  )
}

export default App
