//https://www.hackerrank.com/challenges/s10-interquartile-range/problem

function processData(input) {
  const n = Number(input.split("\n")[0]);
  const arrX = input
    .split("\n")[1]
    .split(" ")
    .map(v => Number(v));

  const arrF = input
    .split("\n")[2]
    .split(" ")
    .map(v => Number(v));

  let arrS = [];
  arrF.forEach((element, index) => {
    let i = 0;
    while (i < element) {
      arrS.push(arrX[index]);
      i++;
    }
  });

  arrS.sort((a, b) => a - b);

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
      ? [[...arrS.slice(0, oddMid)], [...arrS.slice(oddMid + 1)]]
      : [[...arrS.slice(0, evenMid)], [...arrS.slice(evenMid)]];
  }

  const q1 = findMedian(chopper(arrS)[0]);
  const q3 = findMedian(chopper(arrS)[1]);
  //console.log(arrS);
  console.log((q3 - q1).toFixed(1));
}

processData(
  `6
6 12 8 10 20 16
5 4 3 2 1 5`
); // */
