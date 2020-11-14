import React, { Component } from 'react'

import SearchBar from './searchBar/searchBar'
import ResultsList from './resultsList/resultsList'


class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          Google Books Search
        </header>
        <main className="App-main">
          <SearchBar />
          <ResultsList />
        </main>
      </div>
    );
  }
}

export default App;
