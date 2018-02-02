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
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          height={200}
          width={300}
          fontUrl="https://raw.githubusercontent.com/Thisisdotme/frontend-design-assets/master/tim-oreilly/fonts/newsgothic-bold.otf"
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          height={200}
          width={300}
          fontUrl="https://raw.githubusercontent.com/Thisisdotme/frontend-design-assets/master/mc-hammer/fonts/centuryschoolbook.otf"
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
        <LetterMorph
          words={['a', 'b', 'c', 'd', 'e']}
          height={200}
          width={300}
          fontUrl="https://raw.githubusercontent.com/Thisisdotme/frontend-design-assets/master/true-ventures/fonts/helveticaneue-condensed-bold.otf"
          colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
        />
      </div>
    );
  }
}

export default App;
