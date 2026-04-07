// const numbers = [3,4,5,7,2,4,9,6];
// const Max = Math.max(...numbers);
// console.log(Max);

function values(a, b, c) {
    console.log(`${a} ${b} ${c}`)
  return a+b+c;
}
const A = [1, 2, 3];
console.log(values(...A));


const AR = [1,2,3];
const AR2 = [...AR];
AR.push(4);
console.log(AR);
console.log(AR2);
