const products = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'dell', price: 55000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 140000},
]

// map
const names = products.map(product => product.name);
console.log(names);
// Output: [ 'Lenovo', 'dell', 'hp', 'mac' ]

const prices = products.map(p => p.price);
console.log(prices);
// output: [ 65000, 55000, 40000, 140000 ]


// forEach
products.forEach(p => console.log(p.id));
/*
Output:
1
2
3
4
*/


// filter
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);
/*
Output:
[
  { id: 1, name: 'Lenovo', price: 65000 },
  { id: 2, name: 'dell', price: 55000 },
  { id: 4, name: 'mac', price: 140000 }
]
*/


// find
const affordable = products.find(p => p.price <50000);
console.log(affordable);
// Output: { id: 3, name: 'hp', price: 40000 }


// reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);
// Output: 300000



