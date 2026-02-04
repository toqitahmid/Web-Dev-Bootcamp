function averageOfOddValue(A){

    let countElements = 0;
    let sum = 0;

    for(let item of A){
        if(item % 2 !== 0){
            sum += item;
            countElements++;
        }
    }
    if(countElements === 0){
        return 0;
    }
    
    let average = (sum/countElements);
    return average;
    
}

const A = [1,2,3,4,5,6,7,8,9,10];
console.log("The average is : ", averageOfOddValue(A));