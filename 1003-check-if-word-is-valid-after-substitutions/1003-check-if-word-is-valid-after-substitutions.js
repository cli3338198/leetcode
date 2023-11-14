/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for (const c of s) {
        if (stack.length >= 2 && stack.at(-2) === "a" && stack.at(-1) === "b" && c === "c") {
            stack.pop()
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return !stack.length
};