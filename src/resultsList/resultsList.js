import React, { Component } from 'react';
import './resultsList.css';
import Result from '../result/result'


class ResultsList extends Component {
  render() {
    console.log(this.props)
    const results = this.props.results.map((result, i) => <Result { ...result } key={i}/>);
    console.log(results)
    return (
      <div className="results-list">
        {results}
      </div>
    );
  }
}

export default ResultsList;