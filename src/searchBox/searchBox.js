import React, { Component } from 'react';
import './searchBox.css';


class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        <form>
          <label>
            Search:
          </label>
          <input type="text"/>
        </form>
      </div>
    );
  }
}

export default SearchBox;