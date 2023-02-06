// // This function will take an array as an input then it will check if any element of the array is negetive.
// // the the function will return the total negetive number on that array

function findingBadData(arr) {
  if (!Array.isArray(arr)) {
    return "Your input should be a array";
  }
  let badDataCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Array Elements should be numbers";
    }
    if (arr[i] < 0) {
      badDataCount++;
    }
  }
  return badDataCount;
}

let input = findingBadData([2, -5, -7, -13]);
console.log(input);
