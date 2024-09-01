// odd numbers

// way1
for(let i = 0; i < 20; i++){
    if(i%2===1)
        console.log(i);
}

// way2
for(let i = 1; i < 20; i+=2){
        console.log(i);
}

// list of numbers between 1 to 30 divisible by 5
for(i = 1; i <=30; i++){
    if(i%5===0){
        console.log(i);
    }
}

// sum of numbers for 1 to 20 that are devisable by 3
let total = 0;
for(let i = 1; i <= 20; i++){
    if(i %3 === 0){
        console.log(i);
        total = total + i;  
    }
console.log('Total of numbers:', total);
}