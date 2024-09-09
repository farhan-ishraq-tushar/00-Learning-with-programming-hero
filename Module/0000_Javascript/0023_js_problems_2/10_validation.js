function multiply (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply (5 * 7, 5 + 9);
// console.log(result);

function fullName (first, second){
    if(typeof first !== 'string'){
        return 'First name should be a string';
    }
    else if(typeof second !== 'string'){
        return 'Second name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}
const full = fullName ('Rahan', 'Sohan');
// console.log(full);


function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object'
    }
    const price = product.price;
    return price;
}
// const price = getPrice({name: 'book', price: 322556, color: 'black'});
const price = getPrice(5);
console.log(price);

// for array detection use 'Array.isArray' instead of 'typeof'. Otherwise JS recognize array as object. 
/**
 * if(Array.isArray(numbers) === false){
 * return 'Please prove an array';
 * }
 */