function RemoveParenthesesAndReverseInside2(str) {
  let left = str.indexOf("(");
  let right = str.lastIndexOf(")");

  let firstAry = str.substr(0, left);
  let second = str.substr(right + 1, str.length);

  let between = str.substr(left + 1, right - left - 1);

  return `${str} => ${firstAry.concat(checkInner(between)).concat(second)}`;
}

function checkInner(between) {
  //check if there is another set of parentheses
  if (between.includes("(") && between.includes(")")) {
    //finding first left parenthesis
    let leftChild = between.indexOf("(");
    //finding last right parenthesis
    let rightChild = between.lastIndexOf(")");

    //getting the string between the start letter and first left parenthesis
    let leftChildValue = between.substr(0, leftChild);
    //getting the string between the last right parenthesis and the end letter
    let RightChildValue = between.substr(rightChild + 1, between.length);
    //getting the string between the first left and last right parenthesis
    let middleChildValue = between.substr(
      leftChild + 1,
      rightChild - leftChild - 1
    );


    let result = RightChildValue.split("")
      .reverse()
      .join("")
      .concat(checkInner(middleChildValue))//check if there is another set of parentheses with recursion
      .concat(leftChildValue.split("").reverse().join(""));

    return result;
  }

  return between;
}
console.log(RemoveParenthesesAndReverseInside2("foo(bar)"));
console.log(RemoveParenthesesAndReverseInside2("(bar)"));
console.log(RemoveParenthesesAndReverseInside2("foo(bar)blim"));
console.log(RemoveParenthesesAndReverseInside2("foo(foo(bar))blim"));
console.log(RemoveParenthesesAndReverseInside2("foo(foo(bar(test)))blim"));
console.log(RemoveParenthesesAndReverseInside2("helloworld"));
