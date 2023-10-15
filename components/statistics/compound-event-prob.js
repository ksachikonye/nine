//  https://www.hackerrank.com/challenges/s10-mcq-3/problem

function urnMaker(redBalls, blackBalls) {
  const urn = [];
  for (let i = 0; i < redBalls; i++) {
    urn.push(0);
  }
  for (let j = 0; j < blackBalls; j++) {
    urn.push(1);
  }
  return urn;
}

function threeUrnSetter(xUrn, yUrn, zUrn) {
  const nest = [];
  for (let v of xUrn)
    for (let u of yUrn) for (let w of zUrn) nest.push([w, u, v]);
  return nest;
}

const urnX = urnMaker(4, 3);
const urnY = urnMaker(5, 4);
const urnZ = urnMaker(4, 4);

console.log(urnX);
console.log(urnY);
console.log(urnZ);

const urnSet = threeUrnSetter(urnX, urnY, urnZ);
const withBlack = urnSet.filter(curr => curr.includes(1));

const removedBlack = withBlack.map(element => element.filter(v => v !== 1));
const matches = removedBlack.filter(element => element.length === 2);

console.log(urnSet.length);
console.log(withBlack.length);
console.log(removedBlack.length);
console.log(matches.length);

console.log("solution:", matches.length, "/", urnSet.length);
// Urn X contains 4 red balls and 3 black balls.
// Urn Y contains 5 red balls and 4 black balls.
// Urn Z contains 4 red balls and 4 black balls.

//  ----SOLUTION----

// Urn X has a 4/7 probability of giving a red ball
// Urn Y has a 5/9 probability of giving a red ball
// Urn Z has a 1/2 probability of giving a red ball

// Urn X has a 3/7 probability of giving a black ball
// Urn Y has a 4/9 probability of giving a black ball
// Urn Z has a 1/2 probability of giving a black ball

// P(2 red, 1 black)
// = P(Red Red Black) + P(Red Black Red) + P(Black Red Red)
// = (4/7)(5/9)(1/2) + (4/7)(4/9)(1/2) + (3/7)(5/9)(1/2)
// = 20/126 + 16/126 + 15/126
// = 51/126
// = 17/42
