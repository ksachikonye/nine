// https://www.hackerrank.com/challenges/s10-poisson-distribution-2/problem?h_r=next-challenge&h_v=zen

function processData(input) {
  const [data1, data2] = [
    Number(input.split(" ")[0]),
    Number(input.split(" ")[1])
  ];
  const costX = data1;
  const costY = data2;

  function specialPoisson(mean) {
    return mean ** 2 + mean;
  }
  const [solution1, solution2] = [
    specialPoisson(costX) * 40 + 160,
    specialPoisson(costY) * 40 + 128
  ];

  console.log(solution1.toFixed(3));
  console.log(solution2.toFixed(3));
}

processData("0.88 1.55");
