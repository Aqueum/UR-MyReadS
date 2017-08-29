import React, { Component } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
import * as BooksAPI from './BooksAPI';
import './App.css';
import escapeRegExp from 'escape-string-regexp';

class BookListings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    const { books, shelf } = this.props;
    // const { query } = this.state;
    let showingBooks;
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i');
    //   showingBooks = books.filter(book => match.test(book.name));
    // } else {
    if (shelf) {
      showingBooks = books.filter(book => book.shelf === shelf);
    } else {
      showingBooks = books;
    }

    // }

    return (
      <ol className="books-grid">
        {showingBooks.map(book =>
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                  }}
                />
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">
                {book.title}
              </div>
              <div className="book-authors">
                {book.authors}
              </div>
            </div>
          </li>
        )}
      </ol>
    );
  }
}

export default BookListings;
