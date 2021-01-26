//This function subracts 1 from the starting number in the base if statement so that startNum will be inclusive when added to the array. This also will return an array with a value when startNum and endNum are the same. 

function rangeOfNumbers(startNum, endNum) {
  if (startNum-1 >= endNum) {
    return [];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}

//uncomment to test
//rangeOfNumbers(6, 10);
//rangeOfNumbers(4, 4);
//rangeOfNumbers(1, 5);


//This function base checks if the difference between the two numbers is equal to zero and returns an array with that value if they are. 
function rangeOfNumbers2(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers2(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

//rangeOfNumbers2(6, 10);
//rangeOfNumbers2(4, 4);
//rangeOfNumbers2(1, 5);

//Functions using Ternary operator instead of if statements
function rangeOfNumbers3(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers3(startNum, endNum - 1).concat(endNum);
}

//rangeOfNumbers3(6, 10);
//rangeOfNumbers3(4, 4);
//rangeOfNumbers3(1, 5);

//my favorite
function rangeOfNumbers4(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers4(startNum, endNum - 1), endNum ];
}

//rangeOfNumbers4(6, 10);
//rangeOfNumbers4(4, 4);
//rangeOfNumbers4(1, 5);



