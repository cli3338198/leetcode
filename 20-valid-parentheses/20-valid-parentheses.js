/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        ")": "(", "}": "{", "]": "["
    }
    const stack = []
    for (let bracket of s) {
        if (!stack.length) {
            stack.push(bracket)
            continue
        }
        if (stack.length && stack[stack.length-1] === map[bracket]) {
            stack.pop()
        } else {
            stack.push(bracket)
        }
    }
    return stack.length ? false : true
};