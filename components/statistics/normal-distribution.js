// https://www.hackerrank.com/challenges/s10-normal-distribution-1/problem

function processData(input) {
  const [data1, data2, data3, data4, data5] = [
    parseInt(input.split(" ")[0], 10),
    parseInt(input.split(" ")[1], 10),
    parseFloat(input.split("\n")[1]),
    parseInt(input.split("\n")[2].split(" ")[0], 10),
    parseInt(input.split("\n")[2].split(" ")[1], 10)
  ];

  const mean = data1;
  const stdDev = data2;
  const lessthan = data3;
  const between = [data4, data5];

  const cumulativeNormalDistribution = (x, mu, s) => {
    const inner = (x - mu) / (s * Math.sqrt(2));
    const erf = z => {
      const barrow = bar => {
        return (-1 / 2) * Math.E ** -(bar ** 2);
      };
      return (2 / Math.sqrt(Math.PI)) * (barrow(z) - barrow(0));
    };
    return 0.5 + erf(inner) / 2;

    // const inner = (x - mu) / s;
    // const prob = z => {
    //   return Math.E ** -(z ** 2 / 2) / Math.sqrt(2 * Math.PI);
    // };

    // return prob(inner) / s;
  };

  const solution1 = cumulativeNormalDistribution(lessthan, mean, stdDev);
  const solution2 =
    cumulativeNormalDistribution(between[1], mean, stdDev) -
    cumulativeNormalDistribution(between[0], mean, stdDev);
  console.log(solution1.toFixed(3));
  console.log(solution2.toFixed(3));
}

// function processData(input) {
//   function erf(x) {
//     let a1 = 0.254829592,
//       a2 = -0.284496736,
//       a3 = 1.421413741,
//       a4 = -1.453152027,
//       a5 = 1.061405429,
//       p = 0.3275911;

//     let sign = 1;

//     if (x < 0) sign = -1;

//     x = Math.abs(x);

//     // A&S formula 7.1.26
//     let t = 1.0 / (1.0 + p * x);
//     let y =
//       1.0 -
//       ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

//     return sign * y;
//   }

//   function cumulativeDistribution(m, sd, x) {
//     return (1 / 2) * (1 + erf((x - m) / (sd * Math.sqrt(2))));
//   }

//   input = input.split("\n");
//   input[0] = input[0].split(" ");
//   input[2] = input[2].split(" ");

//   let m = parseFloat(input[0][0]),
//     sd = parseFloat(input[0][1]),
//     a = parseFloat(input[1]),
//     b1 = parseFloat(input[2][0]),
//     b2 = parseFloat(input[2][1]);

//   console.log(cumulativeDistribution(m, sd, a).toFixed(3));
//   console.log(
//     (
//       cumulativeDistribution(m, sd, b2) - cumulativeDistribution(m, sd, b1)
//     ).toFixed(3)
//   );
// }

processData(
  `20 2
19.5
20 22`
);
/*

0.401
0.341


-1/2*e^(-x^2)


*/
