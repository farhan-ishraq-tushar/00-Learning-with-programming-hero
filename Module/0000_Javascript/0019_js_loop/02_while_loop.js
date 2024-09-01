// let num = 1;
// while (num < 10){
//     console.log(num);
//     num++;
// }

let num = 1;
let sum = 0;
while (num <=10){
    console.log(num);

    if(num % 2 === 0){
        console.log('Ever Number:', num);
    }

    sum = sum + num;
    console.log('sum:', sum);
    num++;
}