import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends React.Component {
  render() {  
    const { onSearchTitle } = this.props;

    return(
      <TextField 
        InputProps={{
          startAdornment : (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }} 
        onChange={event => onSearchTitle(event.target.value)}
      />
    );
  }
}
  
export default SearchBar;