import React, { Component } from 'react'

import "./App.css"
import SearchBox from './searchBox/searchBox'
import SearchFilter from './searchFilter/searchFilter'
// import SearchBar from './searchBar/searchBar'
// import ResultsList from './resultsList/resultsList'

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
  return queryItems.join('&');
};


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
    this.handleBookType = this.handleBookType.bind(this)
    this.handlePrintType = this.handlePrintType.bind(this)
  }
  
  handleSearchUpdate(searchInput) {
    this.setState({
      searchTerm: searchInput
    })

    const apiKey = 'AIzaSyC97osYaU3RdqyJ__dCHyoKdcAEbiTz87E'

    const params = {
      q: searchInput,
      key: apiKey
    }

    const queryString = formatQueryParams(params)
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const searchUrl = baseUrl + '?' + queryString;

    console.log(searchUrl)
    fetch(searchUrl)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: data,
          error: null
        })
        console.log(this.state.results)
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  handleBookType = (event) => {
    console.log(event)
    console.log('handle bookType filter')
    const {name, value} = event.target
    console.log({name}, {value})
    this.setState({
      [name]: value
    })
  }

  handlePrintType = (event) => {
    console.log(event)
    console.log('handle printType filter')
    const {name, value} = event.target
    console.log({name}, {value})
    this.setState({
      [name]: value
    })
  }

  render() {
    console.log(this.state.searchTerm)
    console.log(this.state.results)
    return (
      <div>
        <header className="App-header">
          <h1>Google Books Search</h1>
        </header>
        <main className="App-main">
          <SearchBox handleSearch={this.handleSearchUpdate}/>
          <SearchFilter 
            handlePrintType={this.handlePrintType}
            handleBookType={this.handleBookType}
          />
          {/* <ResultsList results={this.state.results} /> */}
        </main>
      </div>
    );
  }
}


export default App;
