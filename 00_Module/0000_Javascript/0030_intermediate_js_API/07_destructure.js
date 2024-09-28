const actor = {
    name: 'Sinjo',
    age: 30,
    phone: 13456667788,
    money: 224566777,
}

// Destructuring an object
// if right side is an object left side of destructuring will be object as well'
// use property name as a variable that contains the property value. 
const {phone, age, phone: phone_nm} = actor;
/**
 * above expression means:
 * const phone = actor.phone;
 * const age = actor.age;
 * const phone_nm = actor.phone;
 */
console.log(phone, age, phone_nm);
// Output: 13456667788 30 13456667788



// Destructuring an array
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];


// function
function doubleThem(a, b){
    return [a*2, b*2];
}
const [firstIndexItem, secondIndexItem] = doubleThem(6, 9);
console.log(firstIndexItem, secondIndexItem);
// output: 12 18

