// TASK 
// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

SOLUTION

const closestMultiple10 = num => {
    let n = num % 10
    if (n < 5) { num -= n }
    else { num += 10 - n }
    return num
};