/**
 * React and Redux
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppBookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div className="card">
          <div className="card-divider">
            <h5 className="text-center">
              Please select a book to get started.
            </h5>
          </div>
        </div>
      );
    }

    return (
      <div className="card">
        <div className="card-divider">
          <h5 className="text-center">
            #{ this.props.book.id } - { this.props.book.title }
          </h5>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(AppBookDetail);
