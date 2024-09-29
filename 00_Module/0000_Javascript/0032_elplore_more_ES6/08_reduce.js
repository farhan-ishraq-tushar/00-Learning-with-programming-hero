// Advanced: use of .reduce()

const numbers = [4, 4556, 3434, 3, 23456, 345];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);
// output: 31798

const sum = numbers.reduced((p, c) => p + c, 0);
console.log(sum);