// // This function will take a postive number as input and  return the value of input by Multiply the number by 3, then adding 10, then dividing by 2, then subtract 5.
function mindGame(number) {
  if (typeof number !== "number" || number < 0) {
    return "Your Input Should be Positive Number";
  }
  return (number * 3 + 10) / 2 - 5;
}

let dsdf = mindGame(-6);
console.log(dsdf);
