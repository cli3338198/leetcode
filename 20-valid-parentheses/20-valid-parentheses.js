/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const map = { ")": "(", "}": "{", "]": "[" }
    for (let c of s) {
        if (stack.length && stack[stack.length-1] === map[c]) {
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return !stack.length
};