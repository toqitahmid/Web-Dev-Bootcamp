let name = "iqoT";
let reverseName = "";

// for (let char of name){
//     reverseName = char+reverseName;
// }
// console.log(reverseName);

for(let i = name.length; i>=0; i--){
    reverseName += name[i];    
}
console.log(reverseName);
console.log(typeof(reverseName));

