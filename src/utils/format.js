function round(n, precision) {
  precision = Math.pow(10, precision);
  return Math.round(n * precision) / precision;
}

export function format(n) {
  const abbrev = 'kmb'; // could be an array of strings: [' m', ' Mo', ' Md']
  let base = Math.floor(Math.log(Math.abs(n)) / Math.log(10000));
  const suffix = abbrev[Math.min(2, base - 1)];
  base = abbrev.indexOf(suffix) + 1;
  return suffix ? round(n / Math.pow(10000, base), 2) + suffix : '' + n;
}


export function getTotalFollowers(arr) {
  return arr.reduce((acc, curr) => acc.tracker.today + curr.tracker.today);
}