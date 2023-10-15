// https://www.hackerrank.com/challenges/s10-standard-deviation/problem?h_r=next-challenge&h_v=zen&isFullScreen=false

function processData(input) {
  const arr = input
    .split("\n")[1]
    .split(" ")
    .map(v => Number(v));

  function deviate(standar) {
    function meaner(mu) {
      return mu.reduce((prev, curr) => (prev += curr)) / standar.length;
    }
    const mean = meaner(standar);
    const variance = meaner(standar.map(v => (v - mean) ** 2));
    const standarDeviance = Math.sqrt(variance);
    return standarDeviance.toFixed(1);
  }

  console.log(deviate(arr));
}

processData(
  `5
10 40 30 50 20`
); // */
