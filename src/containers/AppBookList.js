/**
 * React and Redux
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class AppBookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li className="list-group-item"
            onClick={ () => this.props.selectBook(book) }
            key={ book.id }>
          { book.title }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBookList);
