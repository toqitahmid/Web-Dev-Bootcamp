const employee = {
    name: 'Toqi Tahmid',
    1: 'desk one',
    'home-address': 'Jamgora Savar',
    salary: 80000,
    family: {
        father: 'Rubaiath Ali',
        mother:{
            name: 'Shiuly Akter',
            age: 55,            
        }, 
    },
    position: 'software engineer',
};

console.log(employee.family?.mother?.age);