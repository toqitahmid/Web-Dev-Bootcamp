const today = new Date();
console.log(today);
const date = new Date('2026-01-14');
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2026,0,4);
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));
