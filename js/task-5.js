const obj = [
  { name: "Nik", age: 23 },
  { name: "Oleg", age: 35 },
  { name: "Olga", age: 21 },
  { name: "Roma", age: 48 },
  { name: "Pasha😉", age: 30 },
];

function updateObj(obj, callback) {
  const newObj = {
    name: obj.name.toUpperCase(),
    age: obj.age + 5,
  };
  return callback(newObj);
}
const newObj = obj.map((obj) => updateObj(obj, (obj) => obj));
console.log(newObj);
