import React from 'react';
import ReactDOM from 'react-dom';
import SearchFilter from './searchFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});