const college = {
    name : "SSR Institute",
    address : "Ashulia",
    unique : {
        fields : 4,
        area : ['larger', 'bigger'],
        section: {
            boys : 100,
            girls : 100,
        }
    }
}

// console.log(college.unique.area[0]);
// console.log(college.unique['section'].boys);
college.unique.area[0] = 'biggest';
delete college.unique.area[1];
console.log(college);
