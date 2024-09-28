// "for of" loop can be used in array or in string. But is doesn't work on object.Instead we have to use "for in" in object.

// for of in array
const numbers = [1, 2, 3, 4, 6];
for(const num of numbers){
    console.log(num);
}
/* output:
1
2
3
4
6
*/



// for of in string
const nobab = 'Siraj Uddolah';
for(const char of nobab){
    console.log(char);
}
/* output:
S
i
r
a
j

U
d
d
o
l
a
h
*/


// for of in object
const glass = {
    name : 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
};
/*
for(const key of glass){
    // console.log(key);
}
output: error
*/

// 'for in' in object 
for (const key in glass){
    const value = glass[key];
    // here glass[key] will give us the value. If we used glass.key it would only give us the property name. 
    console.log(key, value);
    
}
/**
 Output:
name glass
color golden
price 12
isCleaned true
 */


// Using "for of" in object
for(const key of keys){
    const value = glass[key];
    console.log(key, value);
}
/**
 Output:
name glass
color golden
price 12
isCleaned true
 */
