import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends React.Component {
  render() {  
    return(
      <TextField 
        InputProps={{
          startAdornment : (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }} 
      />
    );
  }
}
  
export default SearchBar;