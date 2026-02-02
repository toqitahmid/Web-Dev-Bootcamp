function sumOfArray(A){

    let sum = 0;
    for(let item of A){
        sum += item;
    }
    return sum;
}

const A  = [10, 20, 30, 40, 50,];
console.log("The sum of array elements is : ", sumOfArray(A));
