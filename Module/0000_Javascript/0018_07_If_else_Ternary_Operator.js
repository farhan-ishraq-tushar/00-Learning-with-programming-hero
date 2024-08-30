// Ternary three parts
// 1 ? .
// condition ?  do something when true . do something when false

const age = 20;
if (age>=18){
    console.log('You can vote')
}
else{
    console.log('Go to sleep')
}

// shortened
age >=18 ? console.log('Go for Vote') : console.log('Go to sleep')


// next example
let price = 500;
const isLeader = true;
if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price)
// shortened
price = isLeader === true ? 0 : price + 100;


// another
if(isLeader === true){
    if(price > 1000){
        price = price/2;
    }
    else{
        price = 0;
    }
}
else{
    price = price+1000;
}

price = isLeader === true ?
        price > 1000 ? price /2 : 0
     : price + 1000;