export function distance(pt1, pt2) {
  const x = pt1.x - pt2.x;
  const y = pt1.y - pt2.y;
  return Math.sqrt(x * x + y * y);
}
