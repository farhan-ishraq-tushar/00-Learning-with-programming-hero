const numbers = [12, 10, 8, 883]

// P-1: Doubling every element
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// Output: [ 24, 20, 16, 1766 ]


// P-2: Adding five to every element
const fiveBonus = numbers.map(num => num + 5); 
console.log(fiveBonus);
// Output: [ 17, 15, 13, 888 ]




// P-5: Finding length on every element in an array
const friends = ['Tom','John', 'Micheal', 'Oliver'];
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);
// Output: [ 3, 4, 7, 6 ]

// p-6: Finding first character of every element in an array
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);
// Output: [ 'T', 'J', 'M', 'O' ]