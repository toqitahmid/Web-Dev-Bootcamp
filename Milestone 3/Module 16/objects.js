const student = {
    name: "Toqi Tahmid",
    id: 856294,
    department: "CST",
    "classMate": ["Jannat", "Arpa"]
}

console.log(student.name);
console.log(student.id);
student.name = "Araf";
console.log(student.name);
console.log(student["classMate"]);

const technology = "department";
student[technology] = "CSE";
console.log(student)