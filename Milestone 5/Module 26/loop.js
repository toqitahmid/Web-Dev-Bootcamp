
const employee = {
    name: 'Toqi Tahmid',
    1: 'desk one',
    'home-address': 'Jamgura, Savar',
    salary: 50000,
    position: 'Software Engineer'
};

for(key in employee){
    const value = employee[key];
    console.log(key,value);
}