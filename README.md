# react-letter-morph [![Build Status](https://travis-ci.org/wuweiweiwu/react-letter-morph.svg?branch=master)](https://travis-ci.org/wuweiweiwu/react-letter-morph)

React Letter Morph :sparkles: Inspired by https://events.google.com/io2016/

[![NPM](https://nodei.co/npm/react-letter-morph.png)](https://nodei.co/npm/react-letter-morph/)

## [Demo](http://weiweiwu.me/react-letter-morph)

![Example](https://media.giphy.com/media/xThtagc1XRkXN0fomA/giphy.gif)

## Usage

```javascript
import React, { Component } from 'react';
import LetterMorph from 'react-letter-morph';

class App extends Component {
  render() {
    return (
      <LetterMorph
        words={['I', 'LOVE', 'YOU']}
        colors={'#ff0049', '#ffffff'}
    );
  }
}

export default App;
```

## Options

### Letter Morph

| Prop               | Type             | Description                                                              | Default                    |
| ------------------ | ---------------- | ------------------------------------------------------------------------ | -------------------------- |
| words _(required)_ | array of strings | Words that you want letter morph to transition from and to               |                            |
| colors             | array of strings | array of css colors that the letters will be drawn in                    | `[]`                       |
| height             | number           | height of the rendered canvas (px)                                       | `200`                      |
| width              | number           | width of the rendered canvas (px)                                        | `500`                      |
| fontUrl            | string           | url or path of the font. Can be .WOFF, .OTF, .TTF                        | [below](#default-font-url) |
| fontSize           | number           | size of the font (px)                                                    | `200`                      |
| lineWidth          | number           | thickness of the outlines (px)                                           | `2`                        |
| period             | number           | how long it takes for words to transition (smaller the faster)           | `2`                        |
| speed              | number           | how long it takes for color to transition (smaller the faster)           | `2`                        |
| steps              | number           | steps in each period (smaller the more efficient but rougher animations) | `500`                      |
| style              | object           | inline css styling for the canvas element                                | `{ position: 'relative' }` |

#### Default font url

`https://fonts.gstatic.com/s/pacifico/v9/yunJt0R8tCvMyj_V4xSjafesZW2xOQ-xsNqO47m55DA.woff`

## Troubleshooting

**I can't see the animation** make sure your `height` and `width` are large enough that the animation is displayed

**It's just black** set the `colors` prop

## Contributing

After cloning the repository and running `npm install` inside, you can use the following commands to develop and build the project.

```sh
# Starts a webpack dev server that hosts a demo page with the component.
# It uses react-hot-loader so changes are reflected on save.
npm start

# Start the storybook, which has several different examples to play with.
# Also hot-reloaded.
npm run storybook

# Runs the library tests
npm test

# Lints the code with eslint
npm run lint

# Lints and builds the code, placing the result in the dist directory.
# This build is necessary to reflect changes if youre
#  `npm link`-ed to this repository from another local project.
npm run build
```

Pull requests are welcome!

## License

MIT

## Credits

* [Rachel Smith](https://codepen.io/rachsmith/details/ONVQWv) for the original inspiration
* [lichin-lin](https://github.com/lichin-lin) for how to get the letter paths
