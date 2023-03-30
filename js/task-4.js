const arr1 = [23, 3, 12, 4, 1];
const arr2 = [26, 17, 10, 9, 19];

const newSortedArray = [...arr1, ...arr2].sort((a, b) => a - b);
console.log(newSortedArray);
