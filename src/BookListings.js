import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
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
                <BookShelfChanger book={book} />
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
