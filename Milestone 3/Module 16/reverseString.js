let name = "iqoT";
let reverseName = "";

// for (let char of name){
//     reverseName = char+reverseName;
// }
// console.log(reverseName);

for(let i = 0; i < name.length; i++){
    const char = name[i];
    reverseName = char+reverseName;    
}
console.log(reverseName);
console.log(typeof(reverseName));

