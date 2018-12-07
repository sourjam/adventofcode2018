const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  const valueArr = data.split('\n');
  let baseValue = 0;
  let freqMap = {};
  let foundDupe = false;
  valueArr.forEach((value, index) => {
    const num = Number(value.slice(1));
    if (value[0] === '+') {
      baseValue += num
    } else {
      baseValue -= num;
    }
  });
  console.log('Day 1 - Part 1 answer is: ', baseValue);
});

fs.readFile('input.txt', 'utf8', (err, data) => {
  const valueArr = data.split('\n');
  let baseValue = 0;
  let freqMap = {};
  let foundDupe = false;
  do {
    valueArr.forEach((value, index) => {
      if (value === '') return;
      const num = Number(value.slice(1));
      if (value[0] === '+') {
        baseValue += num
      } else {
        baseValue -= num;
      }
      if (freqMap[baseValue] !== baseValue) {
        freqMap[baseValue] = baseValue;
      } else if (freqMap[baseValue] === baseValue && foundDupe === false) {
        foundDupe = baseValue;
      }
    });
  } while (foundDupe === false);
  console.log('Day 1 - Part 2 answer is: ', foundDupe);
});
