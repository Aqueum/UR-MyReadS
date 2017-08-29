import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookListings from './BookListings';
import * as BooksAPI from './BooksAPI';

const shelfNames = [
  {
    human: 'Currently Reading',
    mac: 'currentlyReading'
  },
  {
    human: 'Want to Read',
    mac: 'wantToRead'
  },
  {
    human: 'Read',
    mac: 'read'
  }
];

class Bookshelves extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelfNames.map(shelfName =>
            <div className="bookshelf" key={shelfName.mac}>
              <h2 className="bookshelf-title">
                {shelfName.human}
              </h2>
              <div className="bookshelf-books">
                <BookListings books={this.state.books} shelf={shelfName.mac} />
              </div>
            </div>
          )}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Bookshelves;
