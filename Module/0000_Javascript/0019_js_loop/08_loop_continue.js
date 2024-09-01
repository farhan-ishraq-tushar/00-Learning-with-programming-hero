// using of 'continue' 
// "continue" means skip rest of the code for this iteration

for(let i = 1; i <10; i++){
    if(i % 2 ===1){
        continue;
    }
    console.log(i);
}


// using while loop
let n = 0;
while (n <50){
    n++;
    if(n%5 !== 0){
        continue;
    }
    console.log(n);
}