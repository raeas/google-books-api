import React, { Component } from 'react'

import "./App.css"
import SearchBar from './searchBar/searchBar'
import ResultsList from './resultsList/resultsList'

const results = [
  {
    img: "img1",
    title: "Henry I",
    author: "C. Warren Hollister",
    price: "$50.00",
    description: "The resulting volume is one that will be welcomed by students and general readers alike."
  },
  {
    img: "img1",
    title: "Toby is the Best Kitty",
    author: "A. Author Wren",
    price: "$15.00",
    description: "Style the header with a large padding, centered text, a specific background-color and a big sized text."
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Google Books Search</h1>
        </header>
        <main className="App-main">
          <SearchBar />
          <ResultsList results={results} />
        </main>
      </div>
    );
  }
}

export default App;
