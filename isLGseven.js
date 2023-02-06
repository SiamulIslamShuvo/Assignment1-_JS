// //this function will take a number input and it will check if the difference bettween the input and 7 is lesser or grater than 7 ,
// // if the number is less than 7, it will return the difference and if the number is greater it will return the input multiplied  to 2.

function isLGSeven(number) {
  if (typeof number !== "number") {
    return "Your Input should be a Number.";
  }

  let difference = number - 7;
  if (difference < 7) {
    return difference;
  } else {
    return number * 2;
  }
}

let ans = isLGSeven(-15);
console.log(ans);
