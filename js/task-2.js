const arr = [23, 3, 12, 4, 1];

function calculate(arr, callback) {
  const filteredArr = arr.filter((num) => num > 5);
  const total = filteredArr.reduce(
    (previousValue, number) => previousValue + number
  );
  callback(total);
}

function callback3(result) {
  console.log(result);
}

calculate(arr, callback3);
