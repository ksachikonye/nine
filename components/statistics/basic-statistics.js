// https://www.hackerrank.com/challenges/s10-basic-statistics/problem

function processData(input) {
  let arr = input
    .split("\n")[1]
    .split(" ")
    .map(x => Number(x))
    .sort((a, b) => a - b);
  const n = arr.length;
  //console.log(arr);

  function meanFunc() {
    let mean = 0;

    arr.forEach(v => (mean += v));
    mean /= n;
    return mean;
  }

  function medianFunc() {
    let median = 0;

    n % 2 === 1
      ? (median = arr[(n - 1) / 2])
      : (median = (arr[n / 2] + arr[(n - 2) / 2]) / 2);

    return median;
  }

  function modeFunc() {
    let mode = 0;
    let breadCrumbs = {};

    arr.forEach(v =>
      isNaN(breadCrumbs[v]) ? (breadCrumbs[v] = 1) : breadCrumbs[v]++
    );

    const maxMode = Math.max(...[...Object.values(breadCrumbs)]);

    for (let v in breadCrumbs) {
      if (breadCrumbs[v] === maxMode) {
        mode = v;
        break;
      }
    }
    return mode;
  }
  console.log(meanFunc());
  console.log(medianFunc());
  console.log(modeFunc());
}

processData(`10
64630 11735 14216 99233 14470 4978 73429 38120 51135 67060`); // */
