function RemoveParenthesesAndReverseInside2(str) {
  let left = str.indexOf("(");
  let right = str.lastIndexOf(")");

  let firstAry = str.substr(0, left);
  let second = str.substr(right + 1, str.length);

  let between = str.substr(left, right);

  let removeAry = between
    .split("")
    .filter((char) => char !== "(" && char !== ")");

  return `${str} => ${firstAry
    .concat(removeAry.reverse().join(""))
    .concat(second)}`;
}
console.log(RemoveParenthesesAndReverseInside2("foo(bar)"));
console.log(RemoveParenthesesAndReverseInside2("(bar)"));
console.log(RemoveParenthesesAndReverseInside2("foo(foo(bar))blim"));
console.log(RemoveParenthesesAndReverseInside2("helloworld"));
