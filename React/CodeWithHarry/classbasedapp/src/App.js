import './App.css';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  c = 'John';
  render() {
    return (
      <div className="container">
        <div className="row">
          <News />
        </div>
      </div >
    )
  }
}

