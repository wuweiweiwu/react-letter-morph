import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite, Power2 } from 'gsap';
import stylePropType from 'react-style-proptype';

import { distance } from './utils/misc';

const DEFAULT_STYLE = {
  position: 'relative',
};

class ReactLetterMorph extends Component {
  constructor(props) {
    super(props);

    // how many steps in each animation
    this.steps = 2000;

    // how fast to transiton
    this.transitionTime = 2;

    // courseness of interpolation out of 100
    this.interpolationPoint = {
      percentage: 0,
    };

    // dynamically updated
    this.state = {
      offset: 0,
      paths: [],

      // which one are we at rn?
      pathIndex: 0,

      // animation is undefined
      animation: undefined,
    };

    this.loop = this.loop.bind(this);
    this.tweenPaths = this.tweenPaths.bind(this);
    this.interpolatePaths = this.interpolatePaths.bind(this);
    this.getPaths = this.getPaths.bind(this);
    this.drawPathToCanvas = this.drawPathToCanvas.bind(this);
    this.getColorSegment = this.getColorSegment.bind(this);
    this.resetAnimation = this.resetAnimation.bind(this);
  }

  loop() {
    if (!this.canvas) {
      return;
    }

    const { paths, pathIndex, offset } = this.state;
    const { speed } = this.props;

    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (paths.length !== 0) {
      let newOffset = offset + speed / paths[pathIndex].length;
      newOffset = newOffset >= 1 ? 0 : newOffset;
      this.setState(
        {
          offset: newOffset,
        },
        this.drawPathToCanvas
      );
      this.state.offset = newOffset;
      this.drawPathToCanvas();
    }

    requestAnimationFrame(this.loop);
  }

  tweenPaths() {
    this.setState((prevState, props) => ({
      animation: TweenLite.to(this.interpolationPoint, this.transitionTime, {
        percentage: 1,
        ease: Power2.easeInOut,
        delay: props.period,
        onComplete: () => {
          this.interpolationPoint.percentage = 0;
          this.setState(
            prevState => ({
              pathIndex: prevState.paths.length
                ? (prevState.pathIndex + 1) % prevState.paths.length
                : prevState.pathIndex,
            }),
            this.tweenPaths
          );
        },
      }),
    }));
  }

  drawPathToCanvas() {
    const points = this.interpolatePaths();
    let currentColor = this.getColorSegment(0);
    const ctx = this.canvas.getContext('2d');
    ctx.strokeStyle = currentColor;
    ctx.beginPath();

    // draw the points
    for (let i = 0; i < points.length - 1; i++) {
      ctx.moveTo(points[i].x, points[i].y);
      if (
        i &&
        distance(points[i], points[i + 1]) >
          2 * distance(points[i], points[i - 1])
      ) {
        continue;
      }
      ctx.lineTo(points[i + 1].x, points[i + 1].y);

      currentColor = this.getColorSegment(i);

      // if its not the same color then start a new path withe the new color
      if (currentColor !== ctx.strokeStyle) {
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = currentColor;
      }
    }
    ctx.stroke();
  }

  getColorSegment(index) {
    const { colors } = this.props;
    const { offset } = this.state;
    let p = index / this.steps + offset;
    if (p > 1) p -= 1;
    const point = Math.floor(p * colors.length);
    return colors[point];
  }

  interpolatePaths() {
    const { paths, pathIndex } = this.state;
    const from = paths[pathIndex % paths.length].path;
    const to = paths[(pathIndex + 1) % paths.length].path;
    const points = Array.from(Array(this.steps).keys()).map(i => ({
      x: from[i].x + (to[i].x - from[i].x) * this.interpolationPoint.percentage,
      y: from[i].y + (to[i].y - from[i].y) * this.interpolationPoint.percentage,
    }));
    return points;
  }

  getPaths() {
    const { words, font, fontSize } = this.props;
    return new Promise((resolve, reject) => {
      require('opentype.js').load(font, (err, res) => {
        if (err) {
          reject(`Failed to load font: ${err}`);
        } else {
          let offsetY = 0;

          // update offsetY
          words.forEach(word => {
            const box = res.getPath(word, 0, 0, fontSize);
            const y = box.getBoundingBox().y2 - box.getBoundingBox().y1;
            offsetY = Math.max(offsetY, y);
          });

          const paths = words.map((word, index) => {
            // get the stroke from the font (res)
            const pathStroke = res
              .getPath(word, 0, offsetY, fontSize)
              .toPathData(2);
            const svg = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'svg'
            );
            const path = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path'
            );
            svg.appendChild(path);
            path.setAttribute('d', pathStroke);
            const length = path.getTotalLength();
            // get points from the svg
            const points = Array.from(Array(this.steps).keys()).map(i =>
              path.getPointAtLength(length * i / this.steps)
            );
            return {
              length,
              path: points,
            };
          });
          resolve(paths);
        }
      });
    });
  }

  resetAnimation() {
    const { width, height, lineWidth } = this.props;
    this.getPaths()
      .then(paths => {
        this.setState(
          {
            paths,
            pathIndex: 0,
          },
          () => {
            if (!this.canvas) {
              return;
            }
            const ctx = this.canvas.getContext('2d');
            ctx.lineCap = 'round';
            ctx.lineWidth = lineWidth;

            if (this.state.animation) {
              this.state.animation.kill();
            }
            this.tweenPaths();
            this.loop();
          }
        );
      })
      .catch(error => {
        console.error(`Failed to get paths: ${error}`);
      });
  }

  componentDidMount() {
    this.resetAnimation();
  }

  componentWillReceiveProps(nextProps) {
    this.resetAnimation();
  }

  render() {
    const { height, width, style } = this.props;

    return (
      <canvas
        ref={canvas => (this.canvas = canvas)}
        height={height}
        width={width}
        style={{
          ...DEFAULT_STYLE,
          style,
        }}
      />
    );
  }
}

ReactLetterMorph.propTypes = {
  // height and width of the view port of the svg
  height: PropTypes.number,
  width: PropTypes.number,

  // words that are going to be morphed
  words: PropTypes.arrayOf(PropTypes.string).isRequired,

  // colors that will be rotated through
  colors: PropTypes.arrayOf(PropTypes.string),

  // font url
  font: PropTypes.string,

  // fontSize of the words
  fontSize: PropTypes.number,

  // width of the letter outlines
  lineWidth: PropTypes.number,

  // period of the animation
  period: PropTypes.number,

  // speed of the animation
  speed: PropTypes.number,

  // style of the canvas element
  style: stylePropType,
};

ReactLetterMorph.defaultProps = {
  height: 200,
  width: 500,
  colors: [],
  font:
    'https://fonts.gstatic.com/s/pacifico/v9/yunJt0R8tCvMyj_V4xSjafesZW2xOQ-xsNqO47m55DA.woff',
  fontSize: 200,
  lineWidth: 2,
  period: 2,
  speed: 2,
  style: DEFAULT_STYLE,
};

export default ReactLetterMorph;
