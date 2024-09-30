// Search: type coercion

// always use ===
// equal comparison doesnt work for non-primitive

const first = [45, 54, 98];
const second = [45, 54, 98];
if(first === second){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}
// Output: values are not equal. //arrays are non-primitive. So, they can not be compared is this way. Search google to know how to compare two array. 


// type coercion
// type conversion
// type casting
