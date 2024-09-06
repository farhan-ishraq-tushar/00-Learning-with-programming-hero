function add(price1, price2){
    const total = price1 + price2;
    return total;
}
const bill = add(5, 80);


console.log('------------------')
function add2 (price1, price2){
    return price1 + price2;
}
const bill2 = add(5,80);
console.log(bill, bill2);


console.log('------------------')
function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = num1*num2;
    const reuslt = mult/2;
    return reuslt;
}
const reuslt = doMath(10, 5);
console.log(reuslt);



