import React, { Component } from 'react';

import LetterMorph from '../../src';

class App extends Component {
  render() {
    return (
      <div>
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          height={200}
          width={300}
          period={0.1}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          height={200}
          width={300}
          period={0.5}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          height={200}
          width={300}
          period={2}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          height={200}
          width={300}
          period={5}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
      </div>
    );
  }
}

export default App;
