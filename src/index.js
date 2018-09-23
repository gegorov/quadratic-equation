module.exports = function solveEquation(equation = '') {
  // your implementation
  const trimmed = equation.replace(/\s/g, '');

  let a = trimmed.match(/-?\d+(?=\*[a-zA-Z]\^2)/g);
  let b = trimmed.match(/(?<=\^2)(-|\+)\d+(?=\*[a-zA-Z])/g);
  let c = trimmed.match(/(?<=\*[a-zA-Z])[-|\+]\d+$/g);

  a = parseInt(a.toString(), 10);
  b = parseInt(b.toString(), 10);
  c = parseInt(c.toString(), 10);
  const discriminant = (aa, bb, cc) => ((bb ** 2) - (4 * aa * cc));
  const d = discriminant(a, b, c);

  console.log(d);

  if (d < 0) {
    console.log('Discriminant < 0, no real solutions');
  }
  const x1 = ((-1 * b) - Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a);
  const x2 = ((-1 * b) + Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a);
  return [Math.round(x1), Math.round(x2)].sort((x, y) => x - y);
};
