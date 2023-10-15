//https://www.hackerrank.com/challenges/s10-quartiles/problem?isFullScreen=true

function processData(input) {
  const n = Number(input.split("\n")[0]);
  const arr = input
    .split("\n")[1]
    .split(" ")
    .map(v => Number(v))
    .sort((a, b) => a - b);

  function findMedian(fullSet) {
    const n = fullSet.length;
    const [oddMid, evenMidA, evenMidB] = [(n - 1) / 2, n / 2 - 1, n / 2];

    return n % 2 === 1
      ? fullSet[oddMid]
      : (fullSet[evenMidA] + fullSet[evenMidB]) / 2;
  }

  function chopper(setToChop) {
    const n = setToChop.length;
    const [oddMid, evenMid] = [(n - 1) / 2, n / 2];
    return n % 2 === 1
      ? [[...arr.slice(0, oddMid)], [...arr.slice(oddMid + 1)]]
      : [[...arr.slice(0, evenMid)], [...arr.slice(evenMid)]];
  }

  const q1 = findMedian(chopper(arr)[0]);
  const q2 = findMedian(arr);
  const q3 = findMedian(chopper(arr)[1]);

  console.log(q1);
  console.log(q2);
  console.log(q3);
}

processData(
  `9
1 2 3 4 5 6 7 8 9 `
); //*/
