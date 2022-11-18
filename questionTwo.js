function RemoveParenthesesAndReverseInside2(str) {
  let left = str.indexOf("(");
  let right = str.lastIndexOf(")");

  let firstAry = str.substr(0, left);
  let second = str.substr(right + 1, str.length);

  let between = str.substr(left + 1, right - left - 1);

  if (between.includes("(") && between.includes(")")) {
    return `${str} => ${firstAry.concat(checkInner(between)).concat(second)}`;
  }

  return `${str} => ${firstAry
    .concat(between.split("").reverse().join(""))
    .concat(second)}`;
}

function checkInner(between) {
  if (between.includes("(") && between.includes(")")) {
    let leftChild = between.indexOf("(");
    let rightChild = between.lastIndexOf(")");

    let leftChildValue = between.substr(0, leftChild);
    let RightChildValue = between.substr(rightChild + 1, between.length);
    let middleChildValue = between.substr(
      leftChild + 1,
      rightChild - leftChild - 1
    );

    let result = RightChildValue.split("")
      .reverse()
      .join("")
      .concat(checkInner(middleChildValue))
      .concat(leftChildValue.split("").reverse().join(""));

    return result;
  }

  return between;
}
console.log(RemoveParenthesesAndReverseInside2("foo(bar)"));
console.log(RemoveParenthesesAndReverseInside2("(bar)"));
console.log(RemoveParenthesesAndReverseInside2("foo(bar)blim"));
console.log(RemoveParenthesesAndReverseInside2("foo(foo(bar(test)))blim"));
console.log(RemoveParenthesesAndReverseInside2("helloworld"));
