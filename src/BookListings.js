import React, { Component } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelfChanger from './BookShelfChanger';

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
                <BookShelfChanger shelf={shelf} />
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
