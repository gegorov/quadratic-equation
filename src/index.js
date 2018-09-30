module.exports = function solveEquation(equation = '') {
  // your implementation
  const trimmed = equation.replace(/\s/g, '');

  const a = parseInt(trimmed.match(/-?\d+(?=\*[a-zA-Z]\^2)/g).toString(), 10);
  const b = parseInt(trimmed.match(/(?<=\^2)(-|\+)\d+(?=\*[a-zA-Z])/g).toString(), 10);
  const c = parseInt(trimmed.match(/(?<=\*[a-zA-Z])[-|\+]\d+$/g).toString(), 10);

  const getDiscriminant = (aa, bb, cc) => ((bb ** 2) - (4 * aa * cc));
  const sqrtDiscr = Math.sqrt(getDiscriminant(a, b, c));

  const x1 = ((-1 * b) - sqrtDiscr) / (2 * a);
  const x2 = ((-1 * b) + sqrtDiscr) / (2 * a);
  return [Math.round(x1), Math.round(x2)].sort((x, y) => x - y);
};
