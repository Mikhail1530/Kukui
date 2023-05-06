// TASK
// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`
// Good luck and try to be as creative as possible!

SOLUTION

var x = 'helloWorld'
var y = ", "
var c = "!"
const helloWorld = () => {

return x[0].toUpperCase() + x.slice(1,5) + y + x.slice(5) + c
};