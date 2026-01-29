const mobile = {
    brand : 'realme',
    price : 13000,
    color : 'black',
    camera : '13 mp',
    isNew : false
}

// for(const key in mobile){
//     console.log(key);
// }

const keys = Object.keys(mobile);
for(const key of keys){
    console.log(key, ':', mobile[key]);
}