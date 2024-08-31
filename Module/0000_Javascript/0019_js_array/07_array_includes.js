const friends = ['rafiq', 'jobbar', 'asif', 'nazrul'];
const foods = 'ros o gol l a';
const nums =[];
// ".includes" identifies weather an array includes certain item or variable by mentioning it true or false 
// "includes" is case sensitive
console.log(friends.includes('asif'));
console.log(friends.includes('taka'));

// "indexOf" identifies the index of an element in a array. When element is not in the array it gives output "-1". Index of array starts from 0.
console.log(friends.indexOf('asif'));

// "Array.isArray('variable')" identifies if the variable an array or not. Empty array is also is an array. 
console.log(Array.isArray(friends));
console.log(Array.isArray(foods));
console.log(Array.isArray(nums));

// **Explore.. ".join" ".concat" ".slice" ".splice"
// PH-GitHub- js-array-tasks

