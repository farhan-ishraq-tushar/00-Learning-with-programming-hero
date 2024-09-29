 
const numbers = [1, 245, 2324, 2345, 23445];
const playersHeight = [75, 64, 80, 78, 66, 50, 59];

// P-1: Selecting players with height more that 70 inch
const heightSelected = playersHeight.filter(p => p > 70); // ".filter" selects elements based on a condition and returns an array with the elements that fulfilled the condition.
console.log(heightSelected);
// Output: [ 75, 80, 78 ]



// P-2: Selecting odd numbers
const oddSelected = playersHeight.filter(p => p % 2 === 1);
console.log(oddSelected);
// output: [ 75, 59 ]


// P-3: Selecting names with character more than 5
const friends = ["Eshita", "Sakura", "Saske", "Luffy", "Leo", "Neil", "Haruna"];
const friendsSelected = friends.filter(friend => friend.length > 4);
console.log(friendsSelected);
// output: [ 'Eshita', 'Sakura', 'Saske', 'Luffy', 'Haruna' ]