const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Dipjool'}
]
// const studentName = [];

// for (let i = 0; i < student.length; i++) {
//     const element = student[i].name;
//     studentName.push(element);
// }

// console.log(studentName);


// console.log(student[1].name);


const names = student.map( s => s.name);
const ids = student.map( s => s.id);
const biggerOne = student.find( s => s.id > 40);
console.log(biggerOne);