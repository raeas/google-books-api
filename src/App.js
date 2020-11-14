import React, { Component } from 'react'

import "./App.css"
import SearchBox from './searchBox/searchBox'
// import SearchBar from './searchBar/searchBar'
// import ResultsList from './resultsList/resultsList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchTerm: '',
      printType: '',
      bookType: ''
    }
    this.handleSearchUpdate = this.handleSearchUpdate.bind(this)
  }
  
  handleSearchUpdate(term) {
    this.setState({
      searchTerm: term
    })
  }

  componentDidMount(){
    const searchQuery = this.state.searchTerm
    const apiKey = 'AIzaSyC97osYaU3RdqyJ__dCHyoKdcAEbiTz87E'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+&key=${apiKey}`
    console.log(url)
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const results = Object.keys(data)
          .map(key => data[key].item[0]);
        this.setState({
          results,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  setSelected(selected) {
    this.setState({
      selected
    })
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <div>
        <header className="App-header">
          <h1>Google Books Search</h1>
        </header>
        <main className="App-main">
          <SearchBox handleSearch={this.handleSearchUpdate}/>
          {/* <ResultsList results={this.state.results} /> */}
        </main>
      </div>
    );
  }
}


export default App;
