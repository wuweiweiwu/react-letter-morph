import React, { Component } from 'react';

import LetterMorph from '../../src';

class App extends Component {
  render() {
    return (
      <div>
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          lineWidth={0.5}
          height={200}
          width={300}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          lineWidth={2}
          height={200}
          width={300}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          lineWidth={5}
          height={200}
          width={300}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          lineWidth={10}
          height={200}
          width={300}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
      </div>
    );
  }
}

export default App;
