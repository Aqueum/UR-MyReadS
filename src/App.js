import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// eslint-disable-next-line
import BookListings from './BookListings';
import Bookshelves from './Bookshelves';
import BookSearch from './BookSearch';
import './App.css';

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Bookshelves />} />
        <Route path="/search" render={() => <BookSearch />} />
      </div>
    );
  }
}

export default BooksApp;
