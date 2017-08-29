import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookListings from './BookListings';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as BooksAPI from './BooksAPI';

class BookSearch extends Component {
  state = {
    books: [],
    query: ''
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
  //   componentDidMount() {
  //     BooksAPI.search(query, 100).then(books => {
  //       this.setState({ books });
  //     });
  //   }
  updateQuery = query => {
    this.setState({ query: query.trim() });
  };
  render() {
    const { books } = this.props;
    const { query } = this.state;
    // let showingBooks;
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i');
    //   showingBooks = books.filter(book => match.test(book.name));
    // } else {
    //   showingBooks = books;
    // }

    // showingBooks.sort(sortBy('name'));

    return (
      // state = {
      //     books: [],
      //     query: ''
      //   }
      //   let showingBooks;
      //   const { query } = this.state;
      //   if (query) {
      //     const match = new RegExp(escapeRegExp(query), 'i');
      //     showingBooks = books.filter(book => match.test(book.name));
      //   } else {
      //     showingBooks = books;
      //   }
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/* 
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {JSON.stringify(this.state)}
          <BookListings books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default BookSearch;
