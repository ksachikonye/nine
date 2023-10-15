// https://www.hackerrank.com/challenges/s10-binomial-distribution-1/problem

function processData(input) {
  const [girls, boys] = [
    Number(input.split(" ")[0]),
    Number(input.split(" ")[1])
  ];

  const pBoys = boys / (boys + girls);

  function binomialDist(x, n, p) {
    let solution = 0;
    let factorialN = 1;
    for (let i = 1; i <= n; i++) {
      factorialN *= i;
    }

    for (let i = 0; i <= x; i++) {
      let factorialX = 1;
      for (let j = 1; j <= i; j++) {
        factorialX *= j;
      }
      for (let j = 1; j <= n - i; j++) {
        factorialX *= j;
      }
      const fact = factorialN / factorialX;
      solution += fact * p ** i * (1 - p) ** (n - i);

      // console.log(fact);
    }

    //console.log(solution);

    return solution;
  }

  console.log(binomialDist(3, 6, pBoys).toFixed(3));
  //return [girls + boys];
}

console.log(processData("1.09 1"));

/*

x = 3 to 0
n = 6

const p = boys / (boys + girls)
const q = girls / (boys + girls)
nTox = 6 * 5 * 4 


120 * p ** (3) 
*/
