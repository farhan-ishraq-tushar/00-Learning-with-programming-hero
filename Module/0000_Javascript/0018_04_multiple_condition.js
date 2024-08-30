const salary = 25000;
const isBCS = true;
const hasCar = true;
const height = 61;

if(salary > 20000 && height > 66){
    console.log('Im am in')
}
else{
    console.log('I am out')
}

if(salary > 25000 || height > 72){
    console.log('Accept')
}
else{
    console.log('Decline')
}

if(salary > 25000 && height > 72 && isBCS == true){
    console.log('Accept')
}
else{
    console.log('Decline')
}

// complex complex condition
if(salary > 25000 && hasCar == true || isBCS == true){
    console.log('Accept with pleasure')
}

