/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1]
    let res = 0
    for (let i=0; i < s.length; i++) {
        const c = s[i]
        if (c === "(") {
            stack.push(i)
        } else {
            stack.pop()
            if (!stack.length) {
                stack.push(i)
            } else {
                res = Math.max(res, i - stack[stack.length-1])
            }
        }
    }
    return res
};