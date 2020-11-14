import React, { Component } from 'react';
import './searchFilter.css';


class SearchFilter extends Component {

  constructor() {
    super()
    this.state = {
      printType: "",
      bookType: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="search-filter">
        <form>
          <label>
            Print Type: 
            <select
              value={this.state.printType}
              name="printType"
              onChange={this.handleChange}
            >
              <option value="printType1">printType1</option>
              <option value="printType2">printType2</option>
              <option value="printType3">printType3</option>
              <option value="printType4">printType4</option>                                          
            </select>
          </label>
          <label>
            Book Type:
            <select
              value={this.state.bookType}
              name="bookType"
              onChange={this.handleChange}
            >
              <option value="bookType1">bookType1</option>
              <option value="bookType2">bookType2</option>
              <option value="bookType3">bookType3</option>
              <option value="bookType4">bookType4</option>                                          
            </select>

          </label>
        </form>
      </div>
    );
  }
}

export default SearchFilter;