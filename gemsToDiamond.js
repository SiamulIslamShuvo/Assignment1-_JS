//this function will take 3 numbers as parameters and multiply the 1st one with 21, nd one with 32 and 3rd one with 43
//then it will check if the total is greater than 2000 if true than it will return total number by  doing a subtract with 2000 and if the total value is less than 2000 than it will return the total.

function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
  if (
    typeof firstFriend !== "number" ||
    typeof secondFriend !== "number" ||
    typeof thirdFriend !== "number"
  ) {
    return "You Should Input All Three Valid Numbers.";
  }
  let totalDiamond = firstFriend * 21 + secondFriend * 32 + thirdFriend * 43;
  if (totalDiamond >= 2000) {
    return totalDiamond - 2000;
  } else {
    return totalDiamond;
  }
}

let count = gemsToDiamond("sadad");
console.log(count);
