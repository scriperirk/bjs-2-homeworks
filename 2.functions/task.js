// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;
  avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSumElements = func(arrOfArr[i]);
    if (arrSumElements > max) {
      max = arrSumElements;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  const result = getArrayParams(arr);
  return result.max - result.min;
}
