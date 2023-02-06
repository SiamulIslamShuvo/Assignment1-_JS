// //this function will take string input then it will check for every index of the string.
// // then it will return even/odd depending on the lenth of the string is divisible by 2 or not.

function evenOdd(str) {
  if (typeof str !== "string") {
    return "Your Input Should be a String";
  }
  let arrayLenth = str.length;
  if (arrayLenth % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let parameter = evenOdd(10);
console.log(parameter);
