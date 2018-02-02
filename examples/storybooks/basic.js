import React, { Component } from 'react';

import LetterMorph from '../../src';

class App extends Component {
  render() {
    return (
      <LetterMorph
        words={['I', 'am', 'a', 'basic', 'example']}
        height={500}
        width={800}
        colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
      />
    );
  }
}

export default App;
