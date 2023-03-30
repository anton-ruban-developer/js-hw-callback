// Вариант 1
const arr = [23, 33, 12, 45, 1];

function calculate(arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i] + 1;
  }
  callback(arr);
}

function callback1(result) {
  console.log(result);
}

calculate(arr, callback1);

// Вариант 2

function calculate1(arr, callback) {
  const result = arr.map((num) => num + 1);
  callback(result);
}
function callback2(result) {
  console.log(result);
}

calculate1([23, 33, 12, 45, 1], callback2);



