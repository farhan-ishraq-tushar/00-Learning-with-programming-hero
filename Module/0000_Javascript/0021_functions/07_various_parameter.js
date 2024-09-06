// Problem: For a given string tell me whether it has even numbers of characters or not

function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if (size %2===0){
        console.log('Even size');
        return true;
    }
    else{
        console.log("Odd size");
        return false;
    }
}
evenSizedString('Dhaka');
evenSizedString('Rajshahi');



console.log('--------------------')
function doDoubleOrTriple(number, doDouble){
    if(doDouble){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doDoubleOrTriple(5, true));
console.log(doDoubleOrTriple(5, false));


console.log('-------------------------')
function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}
numberOfElements([12,124245,432, 3245, 2323, 2323])


console.log('-------------------------')
function getAge(person){
    const age = person.age;
    return age;
}