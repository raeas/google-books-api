import React, { Component } from 'react';
import './searchFilter.css';


class SearchFilter extends Component {

  constructor() {
    super()
    this.state = {
      printType: '',
      bookType: ''
    }
  }

  render() {
    return (
      <div className="search-filter">
        <form>
          <label>
            Print Type: 
            <select
              //the value is the the current state of printType
              value={this.state.printType}
              name="printType"
              //when the onChange event happens the handlePrintType function is called with the event object as the argument. and passes it to the app component
              // onChange={event => this.props.handlePrintType(event.target.value)}>
              onChange={event => this.props.handlePrintType(event)}>
              <option value="select-print-type">Select Print Type</option>  
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>                
            </select>
          </label>
          <label>
            Book Type:
            <select
              value={this.state.value}
              name="bookType"
              // onChange={event => this.props.handleBookType(event.target.value)}>
              onChange={event => this.props.handleBookType(event)}>
              <option value="select-book-type">Select Book Type</option>
              <option value="partial">Partial Text</option>
              <option value="full">Full Text</option>
              <option value="free-ebooks">Free eBooks</option>
              <option value="paid-ebooks">Paid eBooks</option>
              <option value="ebooks">All eBooks</option>                                                      
            </select>

          </label>
        </form>
      </div>
    );
  }
}

export default SearchFilter;