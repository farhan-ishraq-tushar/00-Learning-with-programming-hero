const playersHeight = [75, 64, 80, 78, 66, 50, 59];

const selected = playersHeight.find(player => player > 70); // ".filter" returns elements in an array where as ".find" return elements without and array.
console.log(selected);
// Output: 75