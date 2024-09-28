/*
VS Code ShortCut

Shift + alt + F --------> adds spaces between parameters, variables or sets of number. 

If you've installed Prettier in VSC

*/


// Problem- 1: Default for number type parameter. 
function add(num1 = 0, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
const sum = add (5, 7);

// const sum = add (); if no vale is provided like this "num1" and "num2" would be treated as undefined. Their summation would be "undefined + undefined = NaN".

/**
 * To solve this issue we can take few steps
 * 
 * 1) We can provide default value throughout the function.    
 * 2) If parameter's value is not provided function will take this default value. 
 * 3) In above function "0" is treated as default value of "num1".
 */


// Problem- 2: Default value for string type parameter. 
function fullName(first, last = " "){
    const full = first + " " + last;
    return full;
}
// Here " ' ' " is the default value of the parameter "last". Here ' ' represents an empty string. Its empty but still treated as default value of the parameter "last".



// Problem- 3: Default value for array type parameter. 
function friends(numbs = []){

}
// Here "[]" is the default value of the parameter "numbs". Here "[]" represents an empty array. Its empty but still treated as default value of the parameter "numbs".


// Problem- 4: Default value for object type parameter. 
function person(human = {}){

}
// Here "{}" is the default value of the parameter "human". Here "[]" represents an empty object. Its empty but still treated as default value of the parameter "human".