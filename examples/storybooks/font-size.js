import React, { Component } from 'react';

import LetterMorph from '../../src';

class App extends Component {
  render() {
    return (
      <div>
        <LetterMorph
          words={['0', '1', '2', '3', '4', '5', '6']}
          fontSize={50}
          height={200}
          width={300}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['0', '1', '2', '3', '4', '5', '6']}
          fontSize={100}
          height={200}
          width={300}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['0', '1', '2', '3', '4', '5', '6']}
          fontSize={150}
          height={200}
          width={300}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />{' '}
        <LetterMorph
          words={['0', '1', '2', '3', '4', '5', '6']}
          fontSize={200}
          height={200}
          width={300}
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
      </div>
    );
  }
}

export default App;
