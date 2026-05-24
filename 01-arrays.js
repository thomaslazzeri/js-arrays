const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
// const fourthTeacher = teachers[3];

let currentTeachers = [...teachers];
let fourthTeacher = undefined;

for (let i = 0; i < currentTeachers.length; i++) {
  if (i === 3) {
    fourthTeacher = currentTeachers[i];
    break;
  }
}
console.log(fourthTeacher);


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
// teachers[4] = 'Patrick';

for (let i = 0; i < length; i++) {
  if (i === 4) {
    currentTeachers[i] = 'Patrick';
    break;
  }
}
console.log(currentTeachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
// const lastTeacher = teachers.pop();

let lastTeacher = undefined;
const newTeachersAfterPop = [];

lastTeacher = currentTeachers[currentTeachers.length - 1];

for (let i = 0; i < currentTeachers.length - 1; i++) {
  newTeachersAfterPop.push(currentTeachers[i]);
}
currentTeachers = newTeachersAfterPop;

console.log(lastTeacher);
console.log(currentTeachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
// const firstTeacher = teachers.shift();

let firstTeacher = undefined;
const newTeachersAfterShift = [];

firstTeacher = currentTeachers[0];

for (i = 0; i < currentTeachers.length; i++) {
  newTeachersAfterShift.push(currentTeachers[i]);
}
currentTeachers = newTeachersAfterShift;

console.log(firstTeacher);
console.log(currentTeachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
// teachers.push('Vanessa');

const newTeachersAfterPush = [];

for (let i = 0; i < currentTeachers.length; i++) {
  newTeachersAfterPush.push(currentTeachers[i]);
}
newTeachersAfterPush[newTeachersAfterPush.length] = 'Vanessa';
currentTeachers = newTeachersAfterPush;

console.log(currentTeachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
// teachers.unshift('Sarah');

let currentTeachers2 = [...teachers];
const newTeacher = [];
newTeacher[0] = 'Sarah';

for (let i = 0; i < currentTeachers2.length; i++) {
  newTeacher.push(currentTeachers2[i]);
}
currentTeachers = newTeacher;
console.log(currentTeachers2);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
// const lewisIndex = teachers.indexOf('Lewis');

let lewisIndex = -1;
for (let i = 0; i < currentTeachers.length; i++) {
  if (currentTeachers[i] === 'Lewis') {
    lewisIndex = i;
    break;
  }
}
console.log(lewisIndex);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
// const isTeachersEmpty = teachers.length === 0;

let isTeachersEmpty = true;
for (let i = 0; i < currentTeachers.length; i++) {
  isTeachersEmpty = false;
  break;
}
console.log(isTeachersEmpty);