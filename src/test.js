const colors = ['#EDEEC0', '#ED7B84', '#7397C3', '#7EB77F'];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let pathPointsFrom, pathPointsTo, pathPointsNow;
const steps = 200;
let offset = 0;
let pathCount = 0;
const interpolationPoint = { percentage: 0 };
ctx.lineWidth = 4;
ctx.lineCap = 'round';

function drawPathToCanvas() {
  let thisColor,
    lastColor = getColorSegment(0);
  ctx.strokeStyle = lastColor;
  ctx.beginPath();
  for (let i = 0, l = pathPointsNow.length; i < l; i++) {
    if (pathPointsNow[i + 1]) {
      ctx.moveTo(pathPointsNow[i].x, pathPointsNow[i].y);
      ctx.lineTo(pathPointsNow[i + 1].x, pathPointsNow[i + 1].y);
    } else {
      ctx.lineTo(pathPointsNow[i].x, pathPointsNow[i].y);
    }
    thisColor = getColorSegment(i);
    if (thisColor) {
      if (thisColor != lastColor) {
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = thisColor;
        lastColor = thisColor;
      }
    }
  }
  ctx.closePath();
  ctx.stroke();
}

function samplePath(pathSelector) {
  const path = document.getElementById(pathSelector);
  const length = path.getTotalLength();
  const points = [];
  for (let i = 0; i <= steps; i++) {
    points.push(path.getPointAtLength(length * i / steps));
  }
  return points;
}

function interpolatePaths() {
  const points = [];
  for (let i = 0; i <= steps; i++) {
    points.push({
      x:
        pathPointsFrom[i].x +
        (pathPointsTo[i].x - pathPointsFrom[i].x) *
          interpolationPoint.percentage,
      y:
        pathPointsFrom[i].y +
        (pathPointsTo[i].y - pathPointsFrom[i].y) *
          interpolationPoint.percentage,
    });
  }
  return points;
}

function getColorSegment(i) {
  let p = i / steps + offset;
  if (p > 1) p -= 1;
  const point = Math.floor(p * 4);
  return colors[point];
}

const paths = [
  samplePath('circle-path'),
  samplePath('rect-path'),
  samplePath('triangle-path'),
];

function loop() {
  ctx.clearRect(0, 0, 200, 200);
  offset += 0.009;
  pathPointsNow = interpolatePaths();
  if (offset >= 1) offset = 0;
  drawPathToCanvas();
  requestAnimationFrame(loop);
}

function tweenPaths() {
  pathPointsFrom = paths[pathCount];
  if (pathCount + 1 <= 2) pathPointsTo = paths[pathCount + 1];
  else pathPointsTo = paths[0];

  TweenLite.to(interpolationPoint, 2, {
    percentage: 1,
    ease: Power2.easeInOut,
    delay: 0.4,
    onComplete() {
      console.log(interpolationPoint);
      interpolationPoint.percentage = 0;
      pathCount++;
      if (pathCount > 2) {
        pathCount = 0;
      }
      tweenPaths();
    },
  });
}

tweenPaths();
loop();
