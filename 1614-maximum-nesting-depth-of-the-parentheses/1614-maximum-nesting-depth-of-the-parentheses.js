/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    const stack = []
    let max = 0
    for (const c of s) {
        if (c === "(") {
            stack.push(stack[stack.length-1] + 1 || 1)
        } else if (c === ")") {
            max = Math.max(max, stack.pop())
        } else {
            continue
        }
    }
    return max
};

maxDepth = function(s) {
    let max = 0
    let cur = 0
    for (const c of s) {
        if (c === "(") {
            cur++
        } else if (c === ")") {
            max = Math.max(max, cur--)
        }
    }
    return max
}