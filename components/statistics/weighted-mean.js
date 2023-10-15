//https://www.hackerrank.com/challenges/s10-weighted-mean/problem

function processData(input) {
  const temp = input.split("\n");
  const set = temp[1].split(" ").map(v => Number(v));
  const weight = temp[2].split(" ").map(v => Number(v));
  const n = Number(temp[0]);

  let solution = 0;
  let weigthSum = 0;

  set.forEach((v, i) => (solution += v * weight[i]));
  weight.forEach(v => (weigthSum += v));
  solution /= weigthSum;

  console.log(solution.toFixed(1));
}
processData(`5
10 40 30 50 20
1 2 3 4 5`); // */
