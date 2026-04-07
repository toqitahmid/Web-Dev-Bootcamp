const king = {
    name: 'Mustafa',
    age: 55,
    kingdom: 'Prid-Lands',
}

// Object.freeze(king);
Object.seal(king);
delete king.age;
king.queen = 'Sarabi';
console.log(king);