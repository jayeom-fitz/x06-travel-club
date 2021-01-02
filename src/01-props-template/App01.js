import React from 'react';

import BookList from './components/BookList';
import Books from './static_data/Books';

class App01 extends React.Component {
  render() {
    return(
      <BookList books={Books}/>
    );
  }
}

export default App01;