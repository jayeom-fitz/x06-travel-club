import React from 'react';
import { Container, List } from '@material-ui/core';

import BookListItem from './BookListItem';

class BookList extends React.Component {
  render() {
    const { books, onSelectedBook } = this.props;

    return(
      <Container>
        <List>
          {books.map(book =>
              <BookListItem book={book} onSelectedBook={onSelectedBook}/>
          )}
        </List>
      </Container>
    );
  }
}

export default BookList;
