import React, { Component } from 'react';
import './result.css';


class Result extends Component {
  render() {
    console.log(this.props)
    const book = this.props;
    console.log(book)

    let author;
    let title;
    let description;
    let price;
    let imageUrl;

    if ( book.volumeInfo ) {
      author = book.volumeInfo.authors !== undefined
        ? book.volumeInfo.authors[0]
        : 'No authors listed'
      title = book.volumeInfo.title !== undefined
        ? book.volumeInfo.title
        : 'No title listed'
      imageUrl = book.volumeInfo.imageLinks.thumbnail !== undefined
        ? book.volumeInfo.imageLinks.thumbnail
        : 'https://live.staticflickr.com/6205/6107394084_391a220f34_b.jpg'
    } else {
      author = null;
      title = null;
      imageUrl = null;
      description = null;
      price = 'this is a string';

    }

    if ( book.searchInfo ) {
      description = book.searchInfo.textSnippet !== undefined
      ? book.searchInfo.textSnippet
      : null
    } else {
      description = null
    }

    if ( book.saleInfo ) {
      price = book.saleInfo.saleability === 'FOR_SALE'
      ? '$' + book.saleInfo.listPrice.amount
      : 'No price listed'
    } else {
      price = null
    }

    return (
      <div className="result">
        <div className="result-row">
          <div className="result-img">
            <img src={imageUrl} alt="book cover"/>
          </div>
          <div className="result-info">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Price: {price}</p>
            <p>{description}</p>
          </div>
        </div>        
      </div>

    );
  }
}

export default Result;