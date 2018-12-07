const fs = require('fs');

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
  console.log('Day 1 answer is: ', baseValue);
});
