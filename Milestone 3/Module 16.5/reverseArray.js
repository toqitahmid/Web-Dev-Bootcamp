let A = [1,2,3,4,5];
// console.log(A);

// A.reverse;
// console.log(A);

let B = [];
// for(let item of A){
//     B.unshift(item);
// }
// console.log(B);

for(let i = A.length-1; i >= 0; i--){
    B.push(A[i]);
} 
console.log(B);