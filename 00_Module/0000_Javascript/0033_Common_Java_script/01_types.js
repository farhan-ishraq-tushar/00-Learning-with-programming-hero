// strongly typed Language
// int a = 5;
// string b = 'alim halim khalim';
// bool c = True;
// object student = { name: 'noya dhman', id: 55}
// int[] numbers = [12, 45, 78]
// string[] friends = ['abul', 'babul'];

// JavaScript is a dynamic typed Language

// primitive type
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;


// non-primitive 
const ages = [45, 65, 48];
const student = {id: 23, class: 7};

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p;
/*
 q = {job: 'change web developer'}
Output:
{ job: 'web developer' } { job: 'change web developer' } // Parent is not changed. Assigning new values to object q actually creating a new object. Here p and q are treated as separate sting.  
*/

q.job = 'front end developer';
console.log(p, q);
// output: { job: 'front end developer' } { job: 'front end developer' } //Parent is changed. Changing one of element of the object by q is not generating a new object for q. It rather changing the parent element.  