/**
 * React and Redux
 */

import React, { Component } from 'react';

import AppBookList from '../containers/AppBookList';
import AppBookDetail from '../containers/AppBookDetail';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-padding-y">
          <div className="cell small-12 medium-4 large-3">
            <AppBookList />
          </div>
          <div className="cell small-12 medium-8 large-9">
            <AppBookDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
