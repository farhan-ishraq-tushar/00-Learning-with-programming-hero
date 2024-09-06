function beforeEatting(){
    console.log('Wash your hand');
    console.log('Take a seat');
    console.log('Put items on you plate');
    console.log('Start eatting');
}

// beforeEatting()

function square (number){
    // here number is a parameter that works only inside the function 
    console.log('Value of the number parameter:', number);
    const borgo = number * number;
    console.log('Square of the given number is: ',borgo);
}
square (4);
console.log('--------------------');
square (121);
console.log('--------------------');
square (121234);

function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
}
add(5, 71);
console.log('--------------------');
add(655, 1234);
console.log('--------------------');


function addAll(a,b,c,d,e){
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}
addAll(3, 4, 5, 8);
console.log('------------------');
addAll(3, 4, 5, 6, 7, 78);