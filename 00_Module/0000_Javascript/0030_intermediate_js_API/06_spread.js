const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [2, 456, 33, 122356, 23343, 2345, 2455];
const arrayMax = Math.max(numbers);
const arrayMax2 = Math.max(...numbers); // "..." is called spread operator. 


console.log(numbers);
// output: [2, 456, 33, 122356, 23343, 2345, 2455] // gives full array as output.

console.log(...numbers);
// output: 2 456 33 122356 23343 2345 2455  // gives numbers of the array as output. 

console.log(arrayMax);
// output: NaN

console.log(arrayMax2);
// Output: 122356  // Here output is the maximum number in the array


// Using spread operator to copy
const nums = [4, 5, 87, 9];
const nums2 = nums;
const nums3 = [...nums]; // copy
nums2.push(12);
console.log(nums2);
// output: [ 4, 5, 87, 9, 12 ]

console.log(nums);
// output: [ 4, 5, 87, 9, 12 ]

// Here 'nums2' allocates a memory and call back same memory for 'nums'. As a result both 'nums2' and 'nums' add 12 as new element in the array. So initial array is changed. 

// To prevent this we can use "spread operator '...'"
console.log(nums3);


// advanced
const sonkha = [...nums, 9999] // add extra element for copy
console.log(sonkha);


