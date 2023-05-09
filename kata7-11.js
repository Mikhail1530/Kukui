// TASK 
// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!

SOLUTION
function toAcronym(inp) {
    let t = inp.split(' ')
    let st = ''
    for (let i = 0; i < t.length; i++) {
        st += t[i][0]
    }
    return st.toUpperCase()
}