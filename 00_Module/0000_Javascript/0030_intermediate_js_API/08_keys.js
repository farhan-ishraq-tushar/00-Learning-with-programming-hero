const glass = {
    name : 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
};
console.log(glass);
// output: { name: 'glass', color: 'golden', price: 12, isCleaned: true }


//Part-1: Finding keys of an object
const keys = Object.keys(glass);
// ".keys(object_name)" returns the names of the enumerable string properties and methods of an object.
console.log(keys);
// output: [ 'name', 'color', 'price', 'isCleaned' ]



//Part-2: Finding values of an object
const values = Object.values(glass);
// ".values(object_name)" returns an array of values of the enumerable properties of an object 
console.log(values);
// output: [ 'glass', 'golden', 12, true ]


//Part-3: Array of an array(two dimensional array): Making full object and array and its every properties and array
const entries = Object.entries(glass);
// ".entires(object_name)" Returns an array of key/values of the enumerable properties of an object.
console.log(entries);
/* 
Output: 
[
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isCleaned', true ]
]
*/



//Part-4: Deleting property of an object

// Method-1
delete glass.isCleaned;
// here "delete" will clear "isCleaned" property of object glass
console.log(glass);
// output: { name: 'glass', color: 'golden', price: 12 }


// Method-2: using destructuring method
const {isCleaned, ...shortGlass} = glass;
// here a new object is created as "shortGlass" except the property inCleaned.
console.log(shortGlass);
// output: { name: 'glass', color: 'golden', price: 12 }



//Part-5: Freeze
Object.freeze(glass);
glass.source = 'Made in Bangladesh'
console.log(glass);
// As object glass is freezed the "source" property wil not be added to the object glass. 



//Part-6: Seal: Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
Object.seal(glass);
glass.price = 5000;
glass.source = 'Made in Bangladesh';
console.log(glass);
// Here value of the property "price" of the object "glass" will change but new property "source" wont be added to the object. 




