const obj = [
  { name: "Nik", age: 23 },
  { name: "Oleg", age: 35 },
  { name: "Olga", age: 21 },
  { name: "Roma", age: 48 },
  { name: "Pasha😉", age: 30 },
];

const properAge = obj.filter(({ age }) => age < 32);
console.table(properAge);