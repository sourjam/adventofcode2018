const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  const idArr = data.split('\n');
  let twoLetterCount = 0;
  let threeLetterCount = 0;
  idArr.forEach((string, index) => {
    const strArr = string.split('').sort();
    const strMap = {};
    let hasTwoLetter;
    let hasThreeLetter;
    strArr.forEach((letter, index) => {
      if (strMap[letter] === undefined) {
        strMap[letter] = 1;
      } else if (strMap[letter]) {
        strMap[letter] += 1;
      }

      if (index > 0 && letter !== strArr[index + 1]) {
        if (strMap[letter] === 2) {
          hasTwoLetter = true;
        } else if (strMap[letter] === 3)
          hasThreeLetter = true;
      }
    });
    if (hasTwoLetter) twoLetterCount += 1;
    if (hasThreeLetter) threeLetterCount += 1;
  });
  console.log('Day 2 - Part 1 answer is: ', twoLetterCount * threeLetterCount)
});
