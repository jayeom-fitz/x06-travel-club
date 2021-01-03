import React from 'react';
import { Container, List, ListItem } from '@material-ui/core';

import BookListItem from './BookListItem';

class BookList extends React.Component {
  render() {
    const { books } = this.props;

    return(
      <Container>
        <List>
          {books.map(book =>
            <ListItem>
              <BookListItem book={book} />
            </ListItem>
          )}
        </List>
      </Container>
    );
  }
}

export default BookList;
