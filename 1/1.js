const fs = require('fs');

// The goal is to add up all the numerical inputs from the data
// each input is a plus or minus sign succeeded by a number in text
// first step will be to check whether it's a + or -
// then convert the rest of the string into a Number and apply it to the starting value
fs.readFile('input.txt', 'utf8', (err, data) => {
  const valueArr = data.split('\n');
  let baseValue = 0;
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

// The goal here is to loop through the inputs repeatedly until a duplicate sum
// is found. Wrapping the calculation code above in a do while loop until
// a dupe is found. All sums are recorded in a hashmap until one of the new
// sums is equal to a preexisting sum in the hashmap.
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
