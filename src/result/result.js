import React, { Component } from 'react';
import './result.css';


class Result extends Component {
  render() {
    return (
      <div className="result">
        <div className="result-row">
          <div className="result-img">
            <img src={this.props.volumeInfo.imageLinks.thumbnail}/>
          </div>
          <div className="result-info">
            <h3>{this.props.volumeInfo.title}</h3>
            <p>Author: {this.props.volumeInfo.authors}</p>
            <p>Price: ${this.props.saleInfo.listPrice.amount}</p>
            <p>{this.props.description}</p>
          </div>
        </div>        
      </div>

    );
  }
}

export default Result;