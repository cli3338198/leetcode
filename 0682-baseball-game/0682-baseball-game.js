/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = []
    for (const op of operations) {
        if (op === '+') {
            const a = stack[stack.length-1] || 0
            const b = stack[stack.length-2] || 0
            stack.push(a + b)
        } else if (op === 'C') {
            stack.pop()
        } else if (op === 'D') {
            stack.push(stack[stack.length-1] * 2)
        } else {
            stack.push(Number(op))
        }
    }
    return stack.reduce((acc, val) => acc + val, 0)
};