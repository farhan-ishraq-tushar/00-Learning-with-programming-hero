// Problem-1: data access(access address information)
const data = [{id: 2, name: 'abul', address: 'kocu khet'}];
console.log(data.address);
// output: undefined  ....> Here data is not an object rather it is an array and inside this array there is an object. 

console.log(data[0].address);
// output: kocu khet  



// Problem-2: Find second product price
const products = {
    count:  5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 135000},
    ]
}
console.log(products.data[1].price);
/*
output:135000
*/



// Problem-3: Find second part of the street
const user = {
    id: 5001,
    name: 'Shoriful Islam',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli', 
            third: 'dhanmondi',
        },
        city: 'Dhaka',
    }
}
console.log(user.address.street.second);
// Output: poribag er goli


// Problem 3: Optional chaining to avoid error
const user2 = {
    id: 5002,
    name: 'Left side of majhar',
    address:{
        city: 'Chittagong',
        country: 'Bangladesh',
    } 
}
// console.log(user2.address.street.second);
// Output: error....>  Cannot read properties of undefined (reading 'second')

console.log(user2.address.street?.second); //"?" sign after ".street" enables optional chaining. If "street" is fount js will look inside it otherwise it will return "undefined" avoiding the error. 

