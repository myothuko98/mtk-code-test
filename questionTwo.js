function RemoveParenthesesAndReverseInside(str) {
  let strAry = str.split("");

  if (strAry.includes("(") && strAry.includes(")")) {
    let left = strAry.indexOf("(");
    let right = strAry.lastIndexOf(")");
    let firstAry = strAry.splice(0, left);
    let lastAry = strAry.splice(right - left + 1);

    let removeAry = strAry.filter((char) => char !== "(" && char !== ")");
    // let parenthesesAry = removeAry.slice(left, right);

    let newAry = firstAry.concat(removeAry.reverse()).concat(lastAry).join("");
    return newAry;
  } else {
    return "Invalid Format";
  }
}

console.log(RemoveParenthesesAndReverseInside("foo(foo(bar))blim"));
