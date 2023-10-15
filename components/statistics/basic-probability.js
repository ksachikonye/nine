//https://www.hackerrank.com/challenges/s10-mcq-1/problem

const dice = [1, 2, 3, 4, 5, 6];
console.log("dice:", dice);

let sampleSpace = [];

dice.forEach(element => dice.forEach(v => sampleSpace.push(element + v)));

console.log("S length:", sampleSpace.length, sampleSpace);

let atMost9 = 0;
let moreThan9 = 0;
for (let v of sampleSpace) {
  v <= 9 ? atMost9++ : moreThan9++;
}

console.log(atMost9, moreThan9);
console.log("solution:", atMost9, sampleSpace.length);
