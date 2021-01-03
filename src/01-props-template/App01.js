import React from 'react';
import { Container, Grid } from '@material-ui/core';

import BookList from './components/BookList';
import Books from './static_data/Books';
import SearchBar from './components/SearchBar';
import BookDetail from './components/BookDetail';

class App01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books : Books,
      selectedBook : Books[0],
    };
  }
  
  onSearchTitle(title) {
    const updateList = Books.filter(book => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
    });
    this.setState({
      books : updateList,
    });
  }

  onSelectedBook(book) {
    this.setState({
      selectedBook : book,
    });
  }

  render() {
    return(
      <Container>
        <SearchBar onSearchTitle={this.onSearchTitle.bind(this)}/>
        <Grid container spacing={2}>
          <Grid item>
            <BookList books={this.state.books} onSelectedBook={this.onSelectedBook.bind(this)}/>
          </Grid>
          <Grid item>
            <BookDetail book={this.state.selectedBook} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App01;