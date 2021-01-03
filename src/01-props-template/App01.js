import React from 'react';
import { Container } from '@material-ui/core';

import BookList from './components/BookList';
import Books from './static_data/Books';
import SearchBar from './components/SearchBar';

class App01 extends React.Component {
  render() {
    return(
      <Container>
        <SearchBar />
        <BookList books={Books}/>
      </Container>
    );
  }
}

export default App01;