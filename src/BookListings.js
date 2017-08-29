import React, { Component } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
import * as BooksAPI from './BooksAPI';
import './App.css';
import escapeRegExp from 'escape-string-regexp';

class BookListings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string
  };

  render() {
    const { books, shelf } = this.props;
    let showingBooks;
    if (shelf) {
      showingBooks = books.filter(book => book.shelf === shelf);
    } else {
      showingBooks = books;
    }

    // }
    // changeShelf = (book, shelf) => {
    //   BooksAPI.update(book, shelf).then(books => {
    //     this.setState({ books });
    // };
    // changeShelf function(event) {

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
                  <select value={shelf} onChange={this.changeShelf}>
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
