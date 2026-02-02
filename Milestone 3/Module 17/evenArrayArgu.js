function evenArray(A){

    let evenElement = [];
    for(let item of A){
        if(item % 2 === 0){
            evenElement.push(item);
        }
    }
    return evenElement;
}

const A = [10, 21, 30, 41, 50];
const evens =  evenArray(A);
console.log("The even elements of array A is : ", evens);