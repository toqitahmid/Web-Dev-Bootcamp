function removedDuplicates(A){

    let unique = [];
    for(let i = 0; i < A.length; i++){
        
        if(unique.includes(A[i]) === false){
            unique.push(A[i]);
        }
    }
    return unique;
}

let A = [ 1, 2, 1, 3, 4, 2, 5, 3, 5];
console.log("After removing : ", removedDuplicates(A)); 