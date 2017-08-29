import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Bookshelves from './Bookshelves';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => <Bookshelves books={books} />} />
        <Route path="/search" render={() => <BookSearch />} />
      </div>
    );
  }
}

export default BooksApp;
