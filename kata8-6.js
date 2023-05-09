// TASK 
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

SOLUTION
function noBoringZeros(n) {
    let t = String(n)
    if (n === 0) { return 0 }
    for (let b of t) {
        if (t.slice(-1) == 0) {
            t = t.slice(0, -1)
        }
    }
    return Number(t)
}