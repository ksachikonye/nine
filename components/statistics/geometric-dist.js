//  https://www.hackerrank.com/challenges/s10-geometric-distribution-2/problem

function processData(input) {
  const [data1, data2, data3] = [
    parseInt(input.split(" ")[0], 10),
    parseInt(input.split(" ")[1], 10),
    parseInt(input.split("\n")[1], 10)
  ];
  const p = data1 / data2;
  const n = data3;

  function geometricDistribution(number, probability) {
    const q = 1 - probability;
    const firstArg = q ** (number - 1);
    const secondArg = probability;

    return firstArg * secondArg;
  }

  function cumulativeGeometricDistribution(num, prob) {
    let solution = 0;
    for (let i = 1; i <= num; i++) {
      solution += geometricDistribution(i, prob);
    }
    return solution;
  }

  console.log(cumulativeGeometricDistribution(n, p).toFixed(3));
}

processData(
  `1 3
5
`
);
