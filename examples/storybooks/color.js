import React, { Component } from 'react';

import LetterMorph from '../../src';

class App extends Component {
  render() {
    return (
      <div>
        <LetterMorph
          words={['I', 'have', 'no', 'color']}
          fontSize={100}
          height={200}
          width={500}
        />
        <br />
        <LetterMorph
          words={['I', 'have', 'color', '!!']}
          fontSize={100}
          height={200}
          width={500}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
      </div>
    );
  }
}

export default App;
