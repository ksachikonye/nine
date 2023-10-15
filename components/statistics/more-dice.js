//  https://www.hackerrank.com/challenges/s10-mcq-2/problem

function diceMaker(numberOfFaces) {
  const facesArray = [];
  let i = 1;
  do {
    facesArray.push(i);
    i++;
  } while (i <= numberOfFaces);
  return facesArray;
}

function twoDicesSetter(diceArray) {
  let nest = [];
  for (let v of diceArray) {
    for (let u of diceArray) {
      nest.push([v, u]);
    }
  }
  return nest;
}

const dice = diceMaker(6);
const fullSet = twoDicesSetter(dice);

let cache = [];

fullSet.forEach(v => {
  if (v[0] + v[1] === 6 && v[0] !== v[1]) {
    cache.push(v);
  }
});
const solution = cache.length;

console.log(dice);
console.log(cache);

console.log("solution:", solution, "/", 36);
