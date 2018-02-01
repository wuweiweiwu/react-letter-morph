import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { TweenLite, Power2 } from 'gsap';
import CSSModules from 'react-css-modules';
import opentype from 'opentype.js';

class ReactLetterMorph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <canvas ref={canvas => (this.canvas = canvas)} />;
  }
}

ReactLetterMorph.propTypes = {};
ReactLetterMorph.defaultProps = {};

export default ReactLetterMorph;
