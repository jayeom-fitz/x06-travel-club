import React from 'react';

import App01 from './01-props-template/App01';
import App02 from './02-simple-counter/App02';

class App extends React.Component {
  render() {
    return(
      <>
        <App02 />
        <App01 />
      </>
    );
  }
}

export default App;
